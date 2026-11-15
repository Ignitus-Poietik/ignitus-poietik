import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

function Announcement() {
  return (
    <div className="announcement">
      <span className="status-dot" /> Ideas are welcome here.{" "}
      <Link to="/#contact">
        Let's build something meaningful <ArrowUpRight size={13} />
      </Link>
    </div>
  );
}

export default Announcement;
