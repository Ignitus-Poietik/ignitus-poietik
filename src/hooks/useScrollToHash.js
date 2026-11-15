import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/*
 * On every navigation: scroll to the #section in the URL if there is one
 * (e.g. "/#services" from another page), otherwise jump to the top.
 */
function useScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "instant" });
      return undefined;
    }

    // Wait a frame so the new page has rendered before scrolling.
    const frame = requestAnimationFrame(() => {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      target?.scrollIntoView({ behavior: "smooth" });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);
}

export default useScrollToHash;
