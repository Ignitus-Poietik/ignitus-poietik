import AboutHero from "../components/AboutHero";
import StoryTimeline from "../components/StoryTimeline";
import MissionVisionValues from "../components/MissionVisionValues";
import TeamGrid from "../components/TeamGrid";
import CtaBand from "../components/CtaBand";
import team from "../data/team";
import usePageTitle from "../hooks/usePageTitle";

function AboutPage() {
  usePageTitle("About us");

  return (
    <>
      <AboutHero />
      <StoryTimeline />
      <MissionVisionValues />

      <section className="section team-section" id="team">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <div className="kicker">03 / THE TEAM</div>
              <h2>
                Curious minds.
                <br />
                <span>Practical builders.</span>
              </h2>
            </div>
            <p>
              Get to know the five people who will listen to your idea, shape it
              and build it with you. Click anyone to see their full profile.
            </p>
          </div>
          <TeamGrid members={team} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}

export default AboutPage;
