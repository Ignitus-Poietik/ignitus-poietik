// Large title banner used at the top of inner pages (About, 404...).
function PageHero({ kicker, title, children }) {
  return (
    <section className="page-hero">
      <div className="wrap">
        <div className="eyebrow">
          <span /> {kicker}
        </div>
        <h1>{title}</h1>
        {children && <p className="hero-lead">{children}</p>}
      </div>
    </section>
  );
}

export default PageHero;
