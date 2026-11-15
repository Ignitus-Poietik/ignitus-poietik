import { Outlet, useLocation } from "react-router-dom";
import Announcement from "./Announcement";
import Header from "./Header";
import Footer from "./Footer";
import ScrollProgress from "./ScrollProgress";
import BackToTop from "./BackToTop";
import useScrollToHash from "../hooks/useScrollToHash";
import useRevealOnScroll from "../hooks/useRevealOnScroll";
import useMagneticButtons from "../hooks/useMagneticButtons";

function Layout() {
  const { pathname } = useLocation();
  useScrollToHash();
  useRevealOnScroll();
  useMagneticButtons();

  return (
    <div className="site-shell">
      <ScrollProgress />
      <Announcement />
      <Header />
      <main key={pathname} className="page">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default Layout;
