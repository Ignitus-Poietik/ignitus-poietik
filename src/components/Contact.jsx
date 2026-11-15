import ContactForm from "./ContactForm";
import Toast from "./Toast";
import useEnquiry from "../hooks/useEnquiry";

function Contact() {
  const { notice, toast, dismissToast, submitEnquiry } = useEnquiry();

  return (
    <section className="contact section" id="contact">
      <div className="wrap contact-grid">
        <div className="contact-copy">
          <div className="kicker">06 / START A CONVERSATION</div>
          <h2>
            Have an idea?
            <br />
            <span>Let's give it a spark.</span>
          </h2>
          <p>
            Tell us a little about what you're working on. We'll use your
            message to start a practical conversation about the next step.
          </p>
          <div className="contact-note">
            <span>↗</span>
            <div>
              <b>Good projects start with a conversation.</b>
              <small>No pressure. Just a useful first step.</small>
            </div>
          </div>
        </div>
        <ContactForm onSubmit={submitEnquiry} notice={notice} />
      </div>
      <Toast toast={toast} onDismiss={dismissToast} />
    </section>
  );
}

export default Contact;
