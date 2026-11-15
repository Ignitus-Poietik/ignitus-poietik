import Principles from "./Principles";
import { mvvItems } from "../data/aboutData";

function MissionVisionValues() {
  return (
    <section className="section mvv-section" id="values">
      <div className="wrap">
        <div className="section-heading">
          <div>
            <div className="kicker">02 / PURPOSE &amp; DIRECTION</div>
            <h2>
              Mission, vision &amp;
              <br />
              <span>core values.</span>
            </h2>
          </div>
          <p>
            The principles that shape our engineering, client partnerships and
            commitment to digital education.
          </p>
        </div>

        <div className="mvv-grid">
          {mvvItems.map((item) => {
            const Icon = item.icon;
            return (
              <article className="mvv-card" key={item.no}>
                <div className="service-top">
                  <span>{item.no} · {item.subtitle.toUpperCase()}</span>
                  <i>
                    <Icon size={20} />
                  </i>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <div className="tags">
                  {item.points.map((point) => (
                    <span key={point}>{point}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <Principles />
      </div>
    </section>
  );
}

export default MissionVisionValues;
