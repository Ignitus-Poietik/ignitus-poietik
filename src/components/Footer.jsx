import { Link } from "react-router-dom";
import Brand from "./Brand";
import SocialLinks from "./SocialLinks";
import PageLink from "./PageLink";
import { academyUrl } from "../data/constants";

function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="footer">
      <div className="wrap footer-top">
        <Brand />
        <p>
          We make digital ideas
          <br />
          useful, human and real.
        </p>
        <SocialLinks />
        <button className="back-top" type="button" onClick={scrollToTop}>
          BACK TO TOP ↗
        </button>
      </div>
      <div className="wrap footer-bottom">
        <span>
          © {new Date().getFullYear()} Ignitus Poietik. All rights reserved.
        </span>
        <div>
          <PageLink to="/about" newTab>
            About us
          </PageLink>
          <Link to="/#services">Services</Link>
          <Link to="/#work">Our work</Link>
          <a href={academyUrl} target="_blank" rel="noreferrer">
            Poietik Academy ↗
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
