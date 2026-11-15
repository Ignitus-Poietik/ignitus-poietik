import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

// Orange call-to-action banner that sends visitors to the contact form.
function CtaBand({
  title = "Have an idea? Let's bring it to life.",
  subtitle = "Tell us what you're building—we'll help you shape it into a clear, practical digital reality.",
}) {
  return (
    <section className="section wrap">
      <div className="cta-band">
        <div className="cta-band-copy">
          <h2>{title}</h2>
          {subtitle && <p>{subtitle}</p>}
        </div>
        <Link className="button button-light" to="/#contact">
          Start a project <ArrowUpRight size={17} />
        </Link>
      </div>
    </section>
  );
}

export default CtaBand;
