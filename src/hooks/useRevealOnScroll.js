import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Elements below the fold that fade/slide in when they scroll into view.
const SELECTOR = [
  "main > section:not(:first-child)",
  ".section-heading",
  ".service-card",
  ".work-card",
  ".team-card",
  ".mvv-card",
  ".story-item",
  ".team-showcase-frame",
  ".steps article",
  ".principles article",
].join(",");

const CLEANUP_DELAY = 1000; // ms, a little longer than the CSS transition

function useRevealOnScroll() {
  const { pathname } = useLocation();

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches || !("IntersectionObserver" in window)) return;

    const timers = [];
    const tracked = [];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ isIntersecting, target }) => {
          if (!isIntersecting) return;
          observer.unobserve(target);
          target.dataset.revealed = "true";
          target.classList.add("is-visible");
          // Remove helper classes afterwards so hover effects work normally.
          timers.push(
            setTimeout(() => {
              target.classList.remove("reveal", "is-visible");
              target.style.transitionDelay = "";
            }, CLEANUP_DELAY)
          );
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll(SELECTOR).forEach((el) => {
      if (el.dataset.revealed === "true") return;
      const index = Array.from(el.parentElement.children).indexOf(el);
      el.style.transitionDelay = `${(index % 4) * 90}ms`; // stagger siblings
      el.classList.add("reveal");
      tracked.push(el);
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
      timers.forEach(clearTimeout);
      tracked.forEach((el) => {
        el.classList.remove("reveal", "is-visible");
        el.style.transitionDelay = "";
      });
    };
  }, [pathname]);
}

export default useRevealOnScroll;
