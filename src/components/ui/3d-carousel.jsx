/* src/components/ui/3d-carousel.jsx */

import { memo, useEffect, useLayoutEffect, useMemo, useState } from "react";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";

// --- 1. IMPORT YOUR LOCAL IMAGES ---
// We go up two levels (from src/components/ui) to src/assets
import img1 from "../../assets/gallery/gallery-1.png";
import img2 from "../../assets/gallery/gallery-2.png";
import img3 from "../../assets/gallery/gallery-3.png";
import img4 from "../../assets/gallery/gallery-4.png";
import img5 from "../../assets/gallery/gallery-5.png";
import img6 from "../../assets/gallery/gallery-6.png";

// Add more imports here if you have more images

// --- 2. CREATE THE ARRAY OF IMPORTED IMAGES ---
const defaultCards = [img1, img2, img3, img4, img5, img6];


// (All the helper hooks like useIsomorphicLayoutEffect and useMediaQuery are the same)
export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;
const IS_SERVER = typeof window === "undefined";
export function useMediaQuery(
  query,
  { defaultValue = false, initializeWithValue = true } = {}
) {
  const getMatches = (query) => {
    if (IS_SERVER) {
      return defaultValue;
    }
    return window.matchMedia(query).matches;
  };
  const [matches, setMatches] = useState(() => {
    if (initializeWithValue) {
      return getMatches(query);
    }
    return defaultValue;
  });
  const handleChange = () => {
    setMatches(getMatches(query));
  };
  useIsomorphicLayoutEffect(() => {
    const matchMedia = window.matchMedia(query);
    handleChange();
    matchMedia.addEventListener("change", handleChange);
    return () => {
      matchMedia.removeEventListener("change", handleChange);
    };
  }, [query]);
  return matches;
}


// (The Carousel component code is the same)
const duration = 0.15;
const transition = { duration, ease: [0.32, 0.72, 0, 1], filter: "blur(4px)" };
const transitionOverlay = { duration: 0.5, ease: [0.32, 0.72, 0, 1] };
const Carousel = memo(({
  handleClick,
  controls,
  cards,
  isCarouselActive
}) => {
  const isScreenSizeSm = useMediaQuery("(max-width: 640px)");
  const cylinderWidth = isScreenSizeSm ? 1100 : 1800;
  const faceCount = cards.length;
  const faceWidth = cylinderWidth / faceCount;
  const radius = cylinderWidth / (2 * Math.PI);
  const rotation = useMotionValue(0);
  const transform = useTransform(rotation, (value) => `rotate3d(0, 1, 0, ${value}deg)`);

  return (
    <div
      className="flex h-full items-center justify-center"
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}>
      <motion.div
        drag={isCarouselActive ? "x" : false}
        className="relative flex h-full origin-center cursor-grab justify-center active:cursor-grabbing"
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
        animate={controls}>
        {cards.map((imgUrl, i) => (
          <motion.div
            key={`key-${imgUrl}-${i}`}
            className="absolute flex h-full origin-center items-center justify-center rounded-xl p-2"
            style={{
              width: `${faceWidth}px`,
              transform: `rotateY(${
                i * (360 / faceCount)
              }deg) translateZ(${radius}px)`,
            }}
            onClick={() => handleClick(imgUrl, i)}>
            <motion.img
              src={imgUrl}
              alt={`gallery_image_${i}`}
              layoutId={`img-${imgUrl}`}
              className="pointer-events-none w-full rounded-xl object-cover aspect-square"
              initial={{ filter: "blur(4px)" }}
              layout="position"
              animate={{ filter: "blur(0px)" }}
              transition={transition} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
});

// --- 3. CHANGE THE EXPORT TO A DEFAULT EXPORT ---
export default function ThreeDPhotoCarousel() {
  const [activeImg, setActiveImg] = useState(null);
  const [isCarouselActive, setIsCarouselActive] = useState(true);
  const controls = useAnimation();
  
  // --- 4. USE OUR LOCAL IMAGE ARRAY ---
  const cards = useMemo(() => defaultCards, []);

  const handleClick = (imgUrl) => {
    setActiveImg(imgUrl);
    setIsCarouselActive(false);
    controls.stop();
  };

  const handleClose = () => {
    setActiveImg(null);
    setIsCarouselActive(true);
  };

  return (
    <motion.div layout className="relative">
      <AnimatePresence mode="sync">
        {activeImg && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            layoutId={`img-container-${activeImg}`}
            layout="position"
            onClick={handleClose}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 md:p-36 rounded-3xl backdrop-blur-sm"
            style={{ willChange: "opacity" }}
            transition={transitionOverlay}>
            <motion.img
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
              style={{
                willChange: "transform",
              }} />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative h-[500px] w-full overflow-hidden">
        <Carousel
          handleClick={handleClick}
          controls={controls}
          cards={cards}
          isCarouselActive={isCarouselActive} />
      </div>
    </motion.div>
  );
}

// --- 5. REMOVE THE OLD NAMED EXPORT ---
// (The line "export { ThreeDPhotoCarousel };" is now gone)