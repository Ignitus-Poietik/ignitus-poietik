import services from "../data/services";
import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <section className="services section" id="services">
      <div className="wrap">
        <div className="section-heading">
          <div>
            <div className="kicker">02 / WHAT WE DO</div>
            <h2>
              Digital solutions.
              <br />
              <span>Real-world purpose.</span>
            </h2>
          </div>
          <p>
            From your first online presence to a custom digital product, we
            help make the next step clearer.
          </p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <ServiceCard key={service.no} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
