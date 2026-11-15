import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Avatar from "../components/Avatar";
import SocialLinks from "../components/SocialLinks";
import TeamGrid from "../components/TeamGrid";
import NotFoundPage from "./NotFoundPage";
import team from "../data/team";
import usePageTitle from "../hooks/usePageTitle";

function TeamMemberPage() {
  const { slug } = useParams();
  const member = team.find((person) => person.slug === slug);
  usePageTitle(member ? `${member.name}, ${member.role}` : "Page not found");

  if (!member) return <NotFoundPage />;

  const firstName = member.name.split(" ")[0];
  const others = team.filter((person) => person.slug !== slug);

  return (
    <>
      <section className="section wrap member">
        <Link className="back-link" to="/about#team">
          <ArrowLeft size={15} /> Back to the team
        </Link>
        <div className="member-grid">
          <div className="member-card">
            <Avatar member={member} className="member-avatar" />
            <SocialLinks items={member.socials} label={`${member.name} online`} />
          </div>
          <div className="member-copy">
            <div className="kicker">{member.role}</div>
            <h1>{member.name}</h1>
            {member.bio && <p>{member.bio}</p>}
            {member.skills.length > 0 && (
              <div className="tags">
                {member.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            )}
            <Link className="button button-primary" to="/#contact">
              Work with {firstName} <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {others.length > 0 && (
        <section className="section team-section">
          <div className="wrap">
            <div className="kicker">MORE OF THE TEAM</div>
            <TeamGrid members={others} />
          </div>
        </section>
      )}
    </>
  );
}

export default TeamMemberPage;
