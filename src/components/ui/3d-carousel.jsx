/* src/components/ui/3d-carousel.jsx */

import {
  AnimatePresence,
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { memo, useEffect, useLayoutEffect, useMemo, useState } from "react";
// --- 1. Import Icons ---
import { ChevronLeft, ChevronRight } from "lucide-react";

// --- Import your local images ---
import img1 from "../../assets/gallery/corecom.webp";
import img4 from "../../assets/gallery/culturalcom.webp";
import img5 from "../../assets/gallery/eventcom.webp";
import img2 from "../../assets/gallery/sportscom.webp";
import img3 from "../../assets/gallery/technicalcom.webp";

const defaultCards = [img1, img2, img3, img4, img5];

// --- Helper Hooks (useIsomorphicLayoutEffect, useMediaQuery) ---
// (These remain unchanged)
export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;
const IS_SERVER = typeof window === "undefined";
export function useMediaQuery(
  query,
  { defaultValue = false, initializeWithValue = true } = {}
) {
  const getMatches = (query) => {
    if (IS_SERVER) return defaultValue;
    return window.matchMedia(query).matches;
  };
  const [matches, setMatches] = useState(() => {
    if (initializeWithValue) return getMatches(query);
    return defaultValue;
  });
  const handleChange = () => {
    setMatches(getMatches(query));
  };
  useIsomorphicLayoutEffect(() => {
    const matchMedia = window.matchMedia(query);
    handleChange();
    matchMedia.addEventListener("change", handleChange);
    return () => matchMedia.removeEventListener("change", handleChange);
  }, [query]);
  return matches;
}

// --- Carousel Component ---
const duration = 0.15;
const transition = { duration, ease: [0.32, 0.72, 0, 1], filter: "blur(4px)" };
const transitionOverlay = { duration: 0.5, ease: [0.32, 0.72, 0, 1] };

const Carousel = memo(
  ({
    handleClick,
    controls,
    cards,
    isCarouselActive,
    // --- 2. Accept rotation motion value ---
    rotation,
  }) => {
    const isScreenSizeSm = useMediaQuery("(max-width: 768px)"); // Changed breakpoint to md for buttons
    const cylinderWidth = isScreenSizeSm ? 1100 : 1800;
    const faceCount = cards.length;
    const faceWidth = cylinderWidth / faceCount;
    const radius = cylinderWidth / (2 * Math.PI);
    // --- 3. Use passed rotation value ---
    // const rotation = useMotionValue(0); // Removed internal motion value
    const transform = useTransform(
      rotation,
      (value) => `rotate3d(0, 1, 0, ${value}deg)`
    );

    return (
      <div
        className="flex items-center justify-center h-full"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        <motion.div
          drag={isCarouselActive ? "x" : false}
          className="relative flex justify-center h-full origin-center cursor-grab active:cursor-grabbing"
          style={{
            transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          onDrag={(_, info) =>
            isCarouselActive &&
            rotation.set(rotation.get() + info.offset.x * 0.05)
          }
          onDragEnd={(_, info) =>
            isCarouselActive &&
            controls.start({
              rotateY: rotation.get() + info.velocity.x * 0.05,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 30,
                mass: 0.1,
              },
            })
          }
          animate={controls}
        >
          {cards.map((imgUrl, i) => (
            <motion.div
              key={`key-${imgUrl}-${i}`}
              className="absolute flex items-center justify-center h-full p-2 origin-center rounded-xl"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${
                  i * (360 / faceCount)
                }deg) translateZ(${radius}px)`,
              }}
              onClick={() => handleClick(imgUrl, i)}
            >
              <motion.img
                src={imgUrl}
                alt={`gallery_image_${i}`}
                layoutId={`img-${imgUrl}`}
                className="object-cover w-full pointer-events-none rounded-xl aspect-square"
                initial={{ filter: "blur(4px)" }}
                layout="position"
                animate={{ filter: "blur(0px)" }}
                transition={transition}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    );
  }
);

// --- Main Component ---
export default function ThreeDPhotoCarousel() {
  const [activeImg, setActiveImg] = useState(null);
  const [isCarouselActive, setIsCarouselActive] = useState(true);
  const controls = useAnimation();
  const cards = useMemo(() => defaultCards, []);
  // --- 4. Add rotation state management for buttons ---
  const rotation = useMotionValue(0); // This will be controlled by buttons and drag
  const anglePerItem = 360 / cards.length;

  const handleClick = (imgUrl) => {
    setActiveImg(imgUrl);
    setIsCarouselActive(false);
    controls.stop();
  };

  const handleClose = () => {
    setActiveImg(null);
    setIsCarouselActive(true);
  };

  // --- 5. Button Click Handlers ---
  const rotateCarousel = (direction) => {
    const currentRotation = rotation.get();
    controls.start({
      rotateY: currentRotation + direction * anglePerItem,
      transition: { type: "spring", stiffness: 150, damping: 30, mass: 0.5 }, // Adjust animation
    });
  };

  return (
    // --- 6. Make main container relative for button positioning ---
    <motion.div layout className="relative w-full">
      {/* Image Modal (AnimatePresence) remains unchanged */}
      <AnimatePresence mode="sync">
        {activeImg && (
          <motion.div /* ... modal content ... */
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            layoutId={`img-container-${activeImg}`}
            layout="position"
            onClick={handleClose}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 md:p-36 rounded-3xl backdrop-blur-sm"
            style={{ willChange: "opacity" }}
            transition={transitionOverlay}
          >
            <motion.img /* ... modal image ... */
              layoutId={`img-${activeImg}`}
              src={activeImg}
              className="max-w-full max-h-full rounded-lg shadow-lg"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.5,
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              style={{ willChange: "transform" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Carousel container */}
      <div className="relative h-[500px] w-full overflow-hidden">
        <Carousel
          handleClick={handleClick}
          controls={controls}
          cards={cards}
          isCarouselActive={isCarouselActive}
          rotation={rotation} // Pass rotation state
        />
      </div>

      {/* --- 7. Navigation Buttons --- */}
      {/* Hide buttons when modal is open */}
      {!activeImg && (
        <>
          {/* Desktop Buttons (Left/Right) - Adjusted Positioning */}
          <button
            onClick={() => rotateCarousel(-1)} // Rotate left
            className="absolute left-0 z-10 items-center justify-center hidden w-12 h-12 transition duration-300 transform -translate-y-1/2 border rounded-full shadow-lg md:flex top-1/2 lg:-left-8 bg-white/30 backdrop-blur-md border-white/40 text-slate-800 hover:bg-white/50"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => rotateCarousel(1)} // Rotate right
            className="absolute right-0 z-10 items-center justify-center hidden w-12 h-12 transition duration-300 transform -translate-y-1/2 border rounded-full shadow-lg md:flex top-1/2 lg:-right-8 bg-white/30 backdrop-blur-md border-white/40 text-slate-800 hover:bg-white/50"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>

          {/* Mobile Buttons (Below) */}
          <div className="flex items-center justify-center gap-6 mt-6 md:hidden">
            <button
              onClick={() => rotateCarousel(-1)} // Rotate left
              className="flex items-center justify-center transition duration-300 border rounded-full shadow-lg w-14 h-14 bg-white/30 backdrop-blur-md border-white/40 text-slate-800 hover:bg-white/50"
              aria-label="Previous image"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={() => rotateCarousel(1)} // Rotate right
              className="flex items-center justify-center transition duration-300 border rounded-full shadow-lg w-14 h-14 bg-white/30 backdrop-blur-md border-white/40 text-slate-800 hover:bg-white/50"
              aria-label="Next image"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </>
      )}
    </motion.div>
  );
}
