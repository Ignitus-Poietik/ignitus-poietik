import TeamCard from "./TeamCard";

function TeamGrid({ members }) {
  return (
    <div className="team-grid">
      {members.map((member) => (
        <TeamCard key={member.slug} member={member} />
      ))}
    </div>
  );
}

export default TeamGrid;
