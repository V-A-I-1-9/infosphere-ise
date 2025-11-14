import { useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function AppLayout() {
  const layoutRef = useRef(null);

  // This useEffect hook tracks the mouse position
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (layoutRef.current) {
        // We update the CSS custom properties (--x, --y) with the mouse coordinates
        const { clientX, clientY } = e;
        layoutRef.current.style.setProperty("--x", `${clientX}px`);
        layoutRef.current.style.setProperty("--y", `${clientY}px`);
      }
    };

    // Add the event listener to the window
    window.addEventListener("mousemove", handleMouseMove);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    // We attach the ref and the className to the main container div
    <div ref={layoutRef} className="app-layout">
      <Header />
      <main className="min-h-[calc(100vh-120px)]">
        {" "}
        {/* Ensures footer is pushed down */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
