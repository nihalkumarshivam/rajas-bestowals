import React from 'react';
import { Sparkles, CheckCircle2, X } from 'lucide-react';

const Toast = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="royal-toast-container">
      <div className="royal-toast">
        <Sparkles size={18} color="#C6A46A" className="toast-sparkle" />
        <span className="toast-message">{message}</span>
        <button onClick={onClose} className="toast-close-btn" aria-label="Close notification">
          <X size={15} />
        </button>
      </div>
    </div>
  );
};

export default Toast;
