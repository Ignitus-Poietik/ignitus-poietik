import { Link, NavLink, useLocation } from "react-router-dom";

/*
 * Link to another page of the site.
 * With `newTab`, it opens in a new browser tab, unless the visitor is
 * already on that section of the site (e.g. already on /about).
 */
function PageLink({ to, newTab = false, nav = false, children, ...props }) {
  const { pathname } = useLocation();
  const openInNewTab = newTab && !pathname.startsWith(to);
  const Component = nav ? NavLink : Link;

  return (
    <Component
      to={to}
      target={openInNewTab ? "_blank" : undefined}
      rel={openInNewTab ? "noopener" : undefined}
      {...props}
    >
      {children}
    </Component>
  );
}

export default PageLink;
