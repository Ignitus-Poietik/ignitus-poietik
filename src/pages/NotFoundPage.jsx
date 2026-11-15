import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import PageHero from "../components/PageHero";
import usePageTitle from "../hooks/usePageTitle";

function NotFoundPage() {
  usePageTitle("Page not found");

  return (
    <PageHero
      kicker="404 / PAGE NOT FOUND"
      title={
        <>
          This idea hasn't <em>been built yet.</em>
        </>
      }
    >
      The page you're looking for doesn't exist or has moved.{" "}
      <Link className="underlined-link" to="/">
        Back to the home page <ArrowUpRight size={15} />
      </Link>
    </PageHero>
  );
}

export default NotFoundPage;
