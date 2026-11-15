import processSteps from "../data/processSteps";

function Process() {
  return (
    <section className="section wrap process">
      <div className="section-heading">
        <div>
          <div className="kicker">05 / HOW WE WORK</div>
          <h2>
            From "what if?"
            <br />
            <span>to "what's next?"</span>
          </h2>
        </div>
        <p>
          A clear, collaborative process keeps us focused on the goal, and
          the people who will use what we build.
        </p>
      </div>
      <div className="steps">
        {processSteps.map((step) => {
          const Icon = step.icon;
          return (
            <article key={step.n}>
              <span className="step-no">{step.n}</span>
              <i>
                <Icon size={20} />
              </i>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Process;
