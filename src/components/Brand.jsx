import { Link } from "react-router-dom";

function Brand() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <Link
      className="brand"
      to="/"
      onClick={scrollToTop}
      aria-label="Ignitus Poietik home"
    >
      <img className="brand-logo" src="/logo.jpg" alt="" width="44" height="44" />
      <span>
        IGNITUS <b>POIETIK</b>
        <small>IDEAS INTO DIGITAL REALITY</small>
      </span>
    </Link>
  );
}

export default Brand;
