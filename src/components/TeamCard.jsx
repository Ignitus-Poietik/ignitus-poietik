import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Avatar from "./Avatar";

function TeamCard({ member }) {
  return (
    <Link className="team-card" to={`/about/team/${member.slug}`}>
      <Avatar member={member} className="team-card-avatar" />
      <div className="team-card-body">
        <h3>{member.name}</h3>
        <small className="kicker">{member.role}</small>
        {member.bio && <p className="team-card-bio">{member.bio}</p>}
        {member.skills?.length > 0 && (
          <div className="tags team-card-tags">
            {member.skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        )}
        <span className="team-card-link">
          View profile <ArrowUpRight size={15} />
        </span>
      </div>
    </Link>
  );
}

export default TeamCard;
