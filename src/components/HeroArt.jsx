import { Code2, Layers3, Sparkles } from "lucide-react";

function HeroArt() {
  return (
    <div className="hero-art" aria-label="Abstract digital design illustration">
      <div className="hero-glow" />
      <div className="grid-glow" />
      <div className="orbit orbit-a" />
      <div className="orbit orbit-b" />
      <div className="orbit orbit-c" />

      <div className="floating-badge badge-top">
        <span className="badge-dot" />
        <Sparkles size={13} />
        <span>Interactive UI / UX</span>
      </div>

      <div className="code-window">
        <div className="window-bar">
          <i />
          <i />
          <i />
          <span>idea.jsx</span>
        </div>
        <div className="code-content">
          <p className="code-line" style={{ "--line": 0 }}>
            <small>01</small> <b>const</b> idea = <em>'possible'</em>;
          </p>
          <p className="code-line" style={{ "--line": 1 }}>
            <small>02</small>
          </p>
          <p className="code-line" style={{ "--line": 2 }}>
            <small>03</small> <b>function</b> <strong>buildFuture</strong>
            () {"{"}
          </p>
          <p className="code-line" style={{ "--line": 3 }}>
            <small>04</small> &nbsp;return <em>'make it real'</em>;
            <span className="code-cursor" aria-hidden="true" />
          </p>
          <p className="code-line" style={{ "--line": 4 }}>
            <small>05</small> {"}"}
          </p>
        </div>
      </div>

      <div className="floating-badge badge-bottom">
        <Layers3 size={14} />
        <span>Scalable Web &amp; Software</span>
      </div>

      <div className="floating-note">
        <span>
          <Code2 size={18} />
        </span>
        <div>
          <b>Built with purpose</b>
          <small>Thoughtful by design</small>
        </div>
        <i>↗</i>
      </div>
    </div>
  );
}

export default HeroArt;
