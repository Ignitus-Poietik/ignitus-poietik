import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Subtle magnetic pull on primary buttons for desktop pointer devices.
function useMagneticButtons() {
  const { pathname } = useLocation();

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reduceMotion) return undefined;

    const buttons = Array.from(document.querySelectorAll(".button, .nav-cta"));

    const handleMove = (event) => {
      const btn = event.currentTarget;
      const rect = btn.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 8;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 6;
      btn.style.setProperty("--mx", `${x.toFixed(1)}px`);
      btn.style.setProperty("--my", `${y.toFixed(1)}px`);
    };

    const handleLeave = (event) => {
      const btn = event.currentTarget;
      btn.style.setProperty("--mx", "0px");
      btn.style.setProperty("--my", "0px");
    };

    buttons.forEach((btn) => {
      btn.addEventListener("pointermove", handleMove);
      btn.addEventListener("pointerleave", handleLeave);
    });

    return () => {
      buttons.forEach((btn) => {
        btn.removeEventListener("pointermove", handleMove);
        btn.removeEventListener("pointerleave", handleLeave);
      });
    };
  }, [pathname]);
}

export default useMagneticButtons;
