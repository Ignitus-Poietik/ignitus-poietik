import { ArrowDownRight, ArrowUpRight, Sparkles } from "lucide-react";
import HeroArt from "./HeroArt";

function Hero() {
  return (
    <section className="hero wrap" id="home">
      <div className="hero-copy">
        <div className="eyebrow hero-enter" style={{ "--delay": "0ms" }}>
          <span /> DIGITAL THINKING. HUMAN IMPACT.
        </div>
        <h1 className="hero-headline">
          <span className="headline-line" style={{ "--line": 0 }}>
            We turn bold
          </span>
          <span className="headline-line" style={{ "--line": 1 }}>
            ideas into{" "}
          </span>
          <em className="gradient-word">
            <span className="headline-line" style={{ "--line": 2 }}>
              digital
            </span>
            <span className="headline-line" style={{ "--line": 3 }}>
              reality.
            </span>
          </em>
        </h1>
        <p className="hero-lead hero-enter" style={{ "--delay": "320ms" }}>
          We design and develop websites, software, and digital experiences
          that help people and businesses move forward.
        </p>
        <div className="hero-actions hero-enter" style={{ "--delay": "420ms" }}>
          <a className="button button-primary" href="#contact">
            Let's talk about your idea <ArrowUpRight size={17} />
          </a>
          <a className="text-link" href="#work">
            Explore our work <ArrowDownRight size={16} />
          </a>
        </div>
        <div className="hero-foot hero-enter" style={{ "--delay": "520ms" }}>
          <span className="sparkle">
            <Sparkles size={16} />
          </span>
          <span>
            Curious minds. Practical solutions.
            <b>Possibilities without the noise.</b>
          </span>
        </div>
      </div>
      <HeroArt />
      <a className="scroll-cue" href="#about">
        ↓ &nbsp; SCROLL TO EXPLORE
      </a>
    </section>
  );
}

export default Hero;
