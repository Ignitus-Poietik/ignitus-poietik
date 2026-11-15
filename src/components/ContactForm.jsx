import { ArrowUpRight, CheckCircle2 } from "lucide-react";

function ContactForm({ onSubmit, notice }) {
  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="form-heading">
        <b>PROJECT ENQUIRY</b>
        <span>
          <i /> OPEN TO IDEAS
        </span>
      </div>
      <label>
        Your name
        <input
          name="name"
          autoComplete="name"
          placeholder="What should we call you?"
          required
        />
      </label>
      <label>
        Email address
        <input
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          placeholder="you@example.com"
          required
        />
      </label>
      <label>
        What can we help with?
        <select name="service" defaultValue="" required>
          <option value="" disabled>
            Choose a service
          </option>
          <option>Website design &amp; development</option>
          <option>Software or web application</option>
          <option>Digital experience / UI/UX</option>
          <option>Poietik Academy</option>
          <option>Something else</option>
        </select>
      </label>
      <label>
        Tell us about your idea
        <textarea
          name="message"
          rows="3"
          placeholder="Your goals, timeline, or challenge..."
          required
        />
      </label>
      <button className="button button-primary submit-button" type="submit">
        Send enquiry <ArrowUpRight size={17} />
      </button>
      {notice && (
        <p className="success-note" role="status">
          <CheckCircle2 size={15} />
          <span>{notice}</span>
        </p>
      )}
      <small className="privacy-note">
        Instant submission — no email app required. We'll reply straight to your inbox.
      </small>
    </form>
  );
}

export default ContactForm;
