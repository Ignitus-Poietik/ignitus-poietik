import Hero from "../components/Hero";
import Ticker from "../components/Ticker";
import About from "../components/About";
import Services from "../components/Services";
import Work from "../components/Work";
import Academy from "../components/Academy";
import Process from "../components/Process";
import Contact from "../components/Contact";
import usePageTitle from "../hooks/usePageTitle";

function HomePage() {
  usePageTitle();

  return (
    <>
      <Hero />
      <Ticker />
      <About />
      <Services />
      <Work />
      <Academy />
      <Process />
      <Contact />
    </>
  );
}

export default HomePage;
