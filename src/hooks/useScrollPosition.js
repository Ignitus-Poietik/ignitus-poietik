import { useEffect, useState } from "react";

// Tracks the vertical scroll position and how far down the page (0 to 1) the user is.
function useScrollPosition() {
  const [position, setPosition] = useState({ y: 0, progress: 0 });

  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const y = window.scrollY;
        setPosition({ y, progress: max > 0 ? Math.min(y / max, 1) : 0 });
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return position;
}

export default useScrollPosition;
