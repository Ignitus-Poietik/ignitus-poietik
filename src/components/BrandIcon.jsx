import brandIcons from "../data/brandIcons";

function BrandIcon({ name, size = 16 }) {
  const icon = brandIcons[name];
  if (!icon) return null;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d={icon.path} />
    </svg>
  );
}

export default BrandIcon;

