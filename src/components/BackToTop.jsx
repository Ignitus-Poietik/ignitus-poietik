import { ArrowUp } from "lucide-react";
import useScrollPosition from "../hooks/useScrollPosition";

// Floating button that appears once the user has scrolled down a bit.
function BackToTop() {
  const { y } = useScrollPosition();
  const visible = y > 600;

  return (
    <button
      type="button"
      className={visible ? "back-to-top is-visible" : "back-to-top"}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
    >
      <ArrowUp size={18} />
    </button>
  );
}

export default BackToTop;
