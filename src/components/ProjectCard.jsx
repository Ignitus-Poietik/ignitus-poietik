import { ArrowUpRight } from "lucide-react";

function ProjectCard({ project }) {
  const Icon = project.icon;
  const domainMap = {
    violet: "poietik.academy",
    orange: "yourbusiness.com",
    blue: "workflow.app",
  };
  const heroMap = {
    violet: <>Learn.<br /><em>Build.</em><br />Become.</>,
    orange: <>Your next<br /><em>chapter</em><br />starts here.</>,
    blue: <>Make work<br /><em>flow</em><br />better.</>,
  };

  return (
    <article className="work-card">
      <div className={`project-visual ${project.style}`}>
        <div className="mock-browser">
          <div className="mock-top">
            <i />
            <i />
            <i />
            <small>{domainMap[project.style]}</small>
          </div>
          <div className="mock-content">
            <strong>{heroMap[project.style]}</strong>
            <span className="mock-icon">
              <Icon size={42} />
            </span>
            <i className="mock-line" />
          </div>
        </div>
        <small className="visual-label">{project.type}</small>
      </div>
      <div className="work-info">
        <div className="kicker">{project.type}</div>
        <h3>{project.title}</h3>
        <p>{project.text}</p>
        <a
          href={project.link || "#contact"}
          target={project.link ? "_blank" : undefined}
          rel={project.link ? "noreferrer" : undefined}
        >
          {project.link ? "Visit academy" : "Discuss a project"}{" "}
          <ArrowUpRight size={15} />
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;
