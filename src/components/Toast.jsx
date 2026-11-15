import { CheckCircle2, X } from "lucide-react";

function Toast({ toast, onDismiss }) {
  if (!toast) return null;

  return (
    <div
      className="toast-notification"
      role="status"
      aria-live="polite"
      key={toast.id}
    >
      <span className="toast-icon" aria-hidden="true">
        <CheckCircle2 size={20} />
      </span>
      <div className="toast-body">
        <b>{toast.title}</b>
        <p>{toast.message}</p>
      </div>
      <button
        type="button"
        className="toast-close"
        onClick={onDismiss}
        aria-label="Close notification"
      >
        <X size={16} />
      </button>
      <span className="toast-progress" aria-hidden="true" />
    </div>
  );
}

export default Toast;
