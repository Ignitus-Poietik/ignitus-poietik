const principles = [
  { no: "01", title: "Think with curiosity", text: "Ask better questions before building." },
  { no: "02", title: "Build with intention", text: "Make every detail serve a purpose." },
  { no: "03", title: "Grow together", text: "Create value that goes beyond code." },
];

function Principles() {
  return (
    <div className="principles">
      {principles.map((p) => (
        <article key={p.no}>
          <span>{p.no}</span>
          <b>{p.title}</b>
          <p>{p.text}</p>
        </article>
      ))}
    </div>
  );
}

export default Principles;
