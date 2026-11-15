import { useEffect, useRef } from "react";
import { storyMilestones } from "../data/aboutData";

function StoryTimeline() {
  const timelineRef = useRef(null);

  useEffect(() => {
    const el = timelineRef.current;
    if (!el) return undefined;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const start = vh * 0.78;
      const total = Math.max(rect.height, 1);
      const progress = Math.min(Math.max((start - rect.top) / total, 0), 1);
      el.style.setProperty("--timeline-progress", `${(progress * 100).toFixed(1)}%`);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section className="section wrap about" id="story">
      <div className="section-heading">
        <div>
          <div className="kicker">01 / OUR STORY</div>
          <h2>
            Technology should open doors,
            <br />
            <span>not add barriers.</span>
          </h2>
        </div>
        <p>
          Ignitus Poietik brings creative thinking and practical software
          development together so ideas become useful digital realities.
        </p>
      </div>

      <div className="story-timeline" ref={timelineRef}>
        <div className="story-track" aria-hidden="true">
          <span className="story-track-fill" />
        </div>
        {storyMilestones.map((item) => (
          <article className="story-item" key={item.step}>
            <span className="story-node" aria-hidden="true" />
            <div className="story-card">
              <div className="story-meta">
                <span>{item.step}</span>
                <small>{item.label}</small>
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default StoryTimeline;
