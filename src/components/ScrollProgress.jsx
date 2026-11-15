import useScrollPosition from "../hooks/useScrollPosition";

// Thin gradient bar at the top of the screen showing reading progress.
function ScrollProgress() {
  const { progress } = useScrollPosition();

  return (
    <div
      className="scroll-progress"
      style={{ transform: `scaleX(${progress})` }}
      aria-hidden="true"
    />
  );
}

export default ScrollProgress;
