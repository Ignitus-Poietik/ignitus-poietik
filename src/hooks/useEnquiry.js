import { useEffect, useState } from "react";

const TOAST_DURATION = 6000;

// Handles instant in-page enquiry submission with a responsive toast notification.
function useEnquiry() {
  const [notice, setNotice] = useState("");
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (!toast) return undefined;
    const timer = setTimeout(() => setToast(null), TOAST_DURATION);
    return () => clearTimeout(timer);
  }, [toast]);

  function submitEnquiry(event) {
    event.preventDefault();
    const formEl = event.currentTarget;
    const form = new FormData(formEl);
    const name = (form.get("name") || "friend").toString().trim();
    const email = (form.get("email") || "").toString().trim();
    const service = (form.get("service") || "project").toString().trim();
    const message = (form.get("message") || "").toString().trim();

    try {
      const saved = JSON.parse(localStorage.getItem("ip_enquiries") || "[]");
      saved.push({ name, email, service, message, createdAt: new Date().toISOString() });
      localStorage.setItem("ip_enquiries", JSON.stringify(saved.slice(-25)));
    } catch {
      // Ignore storage errors in private browsing mode.
    }

    formEl.reset();
    const summary = `Thanks ${name}! Your ${service.toLowerCase()} enquiry has been received. We'll reach out to ${email} shortly.`;
    setNotice(summary);
    setToast({
      id: Date.now(),
      title: "Enquiry sent successfully!",
      message: summary,
    });
  }

  return { notice, toast, dismissToast: () => setToast(null), submitEnquiry };
}

export default useEnquiry;
