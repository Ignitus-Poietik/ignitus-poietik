import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Brand from "./Brand";
import PageLink from "./PageLink";
import { navLinks } from "../data/constants";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname, hash } = useLocation();

  // Close the mobile menu whenever the user navigates.
  useEffect(() => setMenuOpen(false), [pathname, hash]);

  return (
    <header className="site-header">
      <div className="header wrap">
        <Brand />
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          {navLinks.map(([label, to, options = {}]) =>
            to.includes("#") ? (
              <Link key={label} to={to}>
                {label}
              </Link>
            ) : (
              <PageLink key={label} to={to} newTab={options.newTab} nav>
                {label}
              </PageLink>
            )
          )}
          <Link className="nav-cta" to="/#contact">
            Start a project <ArrowUpRight size={15} />
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
