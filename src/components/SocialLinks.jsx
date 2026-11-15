import socials from "../data/socials";
import brandIcons from "../data/brandIcons";
import BrandIcon from "./BrandIcon";

/*
 * Round social media buttons with real brand logos.
 * Defaults to the company channels in data/socials.js; pass `items`
 * (same shape: { name, brand, url }) to show someone else's links.
 */
function SocialLinks({ items = socials, label = "Follow Ignitus Poietik" }) {
  if (items.length === 0) return null;

  return (
    <ul className="social-links" aria-label={label}>
      {items.map(({ name, brand, url }) => (
        <li key={name}>
          <a
            href={url || undefined}
            target={url ? "_blank" : undefined}
            rel={url ? "noreferrer" : undefined}
            aria-label={name}
            title={url ? name : `${name} (link coming soon)`}
            style={{ "--brand": brandIcons[brand]?.color }}
          >
            <BrandIcon name={brand} size={16} />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialLinks;
