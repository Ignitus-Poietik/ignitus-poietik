// Shows a team member's photo, or their initials on a gradient if there's no photo.
function Avatar({ member, className = "" }) {
  const initials = member.name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className={`avatar ${className}`}>
      {member.photo ? (
        <img src={member.photo} alt={member.name} loading="lazy" />
      ) : (
        <span aria-hidden="true">{initials}</span>
      )}
    </div>
  );
}

export default Avatar;
