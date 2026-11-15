import { ArrowDownRight } from "lucide-react";
import Avatar from "./Avatar";
import team, { teamPhoto } from "../data/team";

function AboutHero() {
  return (
    <section className="page-hero about-hero">
      <div className="wrap about-hero-grid">
        <div className="about-hero-copy">
          <div className="eyebrow hero-enter" style={{ "--delay": "0ms" }}>
            <span /> ABOUT IGNITUS POIETIK
          </div>
          <h1 className="hero-headline">
            <span className="headline-line" style={{ "--line": 0 }}>
              The people
            </span>
            <span className="headline-line" style={{ "--line": 1 }}>
              behind{" "}
              <em className="gradient-word">the spark.</em>
            </span>
          </h1>
          <p className="hero-lead hero-enter" style={{ "--delay": "280ms" }}>
            We're a five-person team of designers, developers and educators
            who turn bold ideas into useful digital products—while helping
            others learn to do the same.
          </p>
          <div className="about-hero-links hero-enter" style={{ "--delay": "380ms" }}>
            <a className="text-link" href="#story">
              Read our story <ArrowDownRight size={15} />
            </a>
            <a className="text-link" href="#values">
              Mission &amp; values <ArrowDownRight size={15} />
            </a>
            <a className="text-link" href="#team">
              Meet the 5 builders <ArrowDownRight size={15} />
            </a>
          </div>
        </div>

        <div className="team-showcase-frame">
          {teamPhoto ? (
            <img
              className="team-group-photo"
              src={teamPhoto}
              alt="The Ignitus Poietik team"
              loading="lazy"
            />
          ) : (
            <div className="team-mosaic" aria-label="Ignitus Poietik team portraits">
              {team.map((member) => (
                <div className="mosaic-tile" key={member.slug}>
                  <Avatar member={member} className="mosaic-avatar" />
                  <div>
                    <b>{member.name}</b>
                    <small>{member.role}</small>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="team-showcase-caption">
            <span>THE PEOPLE BEHIND IGNITUS POIETIK</span>
            <b>05 BUILDERS</b>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;
