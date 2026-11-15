import { ArrowUpRight } from "lucide-react";
import PageLink from "./PageLink";
import Principles from "./Principles";
import Avatar from "./Avatar";
import team from "../data/team";

// Short "who we are" teaser on the home page, linking to the full About page.
function About() {
  return (
    <section className="section wrap about" id="about">
      <div className="kicker">01 / WHO WE ARE</div>
      <div className="about-grid">
        <h2>
          Technology should open doors, <span>not add barriers.</span>
        </h2>
        <div>
          <p>
            Ignitus Poietik is an emerging digital and software company with
            a simple belief: good technology starts with understanding
            people.
          </p>
          <p>
            We bring creative thinking and practical development together to
            turn ideas into useful digital experiences, while creating room
            for more people to learn and grow through technology.
          </p>
          <PageLink className="team-teaser" to="/about" newTab>
            <span className="avatar-stack">
              {team.map((member) => (
                <Avatar key={member.slug} member={member} />
              ))}
            </span>
            <span className="underlined-link">
              Meet the team <ArrowUpRight size={15} />
            </span>
          </PageLink>
        </div>
      </div>
      <Principles />
    </section>
  );
}

export default About;
