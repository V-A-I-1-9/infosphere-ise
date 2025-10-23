import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  // Get the current location object
  const { pathname } = useLocation();

  // useEffect runs after the component renders (i.e., after navigation)
  useEffect(() => {
    // Scroll the window to the top left corner
    window.scrollTo(0, 0);
  }, [pathname]); // Re-run this effect whenever the pathname changes

  // This component doesn't render anything visible
  return null;
}

export default ScrollToTop;