import { ArrowUpRight, GraduationCap, Code2, Sparkles } from "lucide-react";
import {
  academyUrl,
  academyImage,
  academyImageSrcSet,
} from "../data/constants";

function Academy() {
  return (
    <section className="academy-section section" id="academy">
      <div className="wrap academy-panel">
        <div className="academy-media">
          <img
            className="academy-photo"
            src={academyImage}
            srcSet={academyImageSrcSet}
            sizes="(max-width: 720px) 92vw, (max-width: 1000px) 44vw, 460px"
            alt="Learner building digital skills on a laptop at Poietik Academy"
            width="640"
            height="480"
            loading="lazy"
            decoding="async"
          />
          <div className="academy-photo-badge">
            <GraduationCap size={18} />
            <span>LEARN · MAKE · GROW</span>
          </div>
          <span className="academy-chip chip-one">
            <Code2 size={14} /> CODE
          </span>
          <span className="academy-chip chip-two">
            <Sparkles size={14} /> CREATE
          </span>
        </div>

        <div className="academy-copy">
          <div className="kicker">04 / LEARN WITH US</div>
          <div className="academy-overline">
            <i /> THE LEARNING SIDE OF POIETIK
          </div>
          <h2>
            Curiosity is a skill.
            <br />
            <span>Keep building it.</span>
          </h2>
          <p>
            Poietik Academy is part of our commitment to learning and
            digital opportunity. Explore the academy to discover its current
            learning experience and offerings.
          </p>
          <a
            className="button button-primary"
            href={academyUrl}
            target="_blank"
            rel="noreferrer"
          >
            Explore Poietik Academy <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Academy;
