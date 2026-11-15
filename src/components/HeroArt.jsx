import { Code2, Layers3, Rocket, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const fadeFloat = (delay, floatY = -8, rotate = null) => ({
  initial: { opacity: 0 },
  animate: {
    opacity: [0, 1, 1, 0],
    scale: [0.88, 1, 1, 0.92],
    y: [10, 0, floatY, -14],
    ...(rotate ? { rotate } : {}),
  },
  transition: {
    duration: rotate ? 6.2 : 5.4,
    times: [0, 0.14, 0.8, 1],
    repeat: Infinity,
    repeatDelay: rotate ? 0.8 : 0.7,
    delay,
    ease: [0.22, 1, 0.36, 1],
  },
});

function HeroArt() {
  const reduceMotion = useReducedMotion();
  const getMotion = (cfg, fallback = {}) => (reduceMotion ? fallback : cfg);

  return (
    <div className="hero-art" aria-label="Abstract digital design illustration">
      <div className="hero-glow" />
      <div className="grid-glow" />
      <div className="orbit orbit-a" />
      <div className="orbit orbit-b" />
      <div className="orbit orbit-c" />

      <motion.div className="floating-badge badge-top" {...getMotion(fadeFloat(0, -8))}>
        <span className="badge-dot" />
        <Sparkles size={13} />
        <span>Interactive UI / UX</span>
      </motion.div>

      <motion.div className="floating-badge badge-top-right" {...getMotion(fadeFloat(1.9, -7))}>
        <Rocket size={13} />
        <span>Fast &amp; Responsive</span>
      </motion.div>

      <div className="code-window">
        <div className="window-bar">
          <i /><i /><i />
          <span>idea.jsx</span>
        </div>
        <div className="code-content">
          <p className="code-line" style={{ "--line": 0 }}>
            <small>01</small> <b>const</b> idea = <em>'possible'</em>;
          </p>
          <p className="code-line" style={{ "--line": 1 }}><small>02</small></p>
          <p className="code-line" style={{ "--line": 2 }}>
            <small>03</small> <b>function</b> <strong>buildFuture</strong>() {"{"}
          </p>
          <p className="code-line" style={{ "--line": 3 }}>
            <small>04</small> &nbsp;&nbsp;<b>const</b> craft = <em>'modern'</em>;
          </p>
          <p className="code-line" style={{ "--line": 4 }}>
            <small>05</small> &nbsp;&nbsp;return <em>'make it real'</em>;
            <span className="code-cursor" aria-hidden="true" />
          </p>
          <p className="code-line" style={{ "--line": 5 }}><small>06</small> {"}"}</p>
        </div>
      </div>

      <motion.div className="floating-badge badge-bottom" {...getMotion(fadeFloat(3.3, -9))}>
        <Layers3 size={14} />
        <span>Scalable Web &amp; Software</span>
      </motion.div>

      <motion.div className="floating-note" {...getMotion(fadeFloat(1.4, -6, [1, 3, 2, 4]), { style: { rotate: 3 } })}>
        <span><Code2 size={18} /></span>
        <div>
          <b>Built with purpose</b>
          <small>Thoughtful by design</small>
        </div>
        <i>↗</i>
      </motion.div>
    </div>
  );
}

export default HeroArt;
