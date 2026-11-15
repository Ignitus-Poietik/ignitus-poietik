const tickerItems = [
  "WEB DEVELOPMENT",
  "DIGITAL PRODUCTS",
  "SOFTWARE SOLUTIONS",
  "TECHNOLOGY EDUCATION",
  "WEB DEVELOPMENT",
  "DIGITAL PRODUCTS",
];

function Ticker() {
  return (
    <div className="ticker">
      <div className="ticker-inner">
        {tickerItems.map((item, i) => (
          <span key={i}>
            {item} <b>✳</b>
          </span>
        ))}
      </div>
    </div>
  );
}

export default Ticker;
