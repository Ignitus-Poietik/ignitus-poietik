import { ArrowUpRight } from "lucide-react";

function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <article className="service-card">
      <div className="service-top">
        <span>{service.no}</span>
        <i>
          <Icon size={22} />
        </i>
      </div>
      <h3>{service.title}</h3>
      <p>{service.text}</p>
      <div className="tags">
        {service.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <a
        href={service.no === "04" ? "#academy" : "#contact"}
        aria-label={`Ask about ${service.title}`}
      >
        <ArrowUpRight size={18} />
      </a>
    </article>
  );
}

export default ServiceCard;
