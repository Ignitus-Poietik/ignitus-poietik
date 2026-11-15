import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

function Work() {
  return (
    <section className="section wrap work" id="work">
      <div className="section-heading">
        <div>
          <div className="kicker">03 / SELECTED WORK</div>
          <h2>
            Ideas in progress.
            <br />
            <span>Possibilities in view.</span>
          </h2>
        </div>
        <p>
          We're growing our portfolio. Here's a look at the kind of digital
          experiences we're building and exploring.
        </p>
      </div>
      <div className="work-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
      {/* <p className="work-note">
        * Concept visuals are illustrative, not completed client projects.
      </p> */}
    </section>
  );
}

export default Work;
