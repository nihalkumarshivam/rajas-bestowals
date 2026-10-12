import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { BRAND_INFO } from '../data/productsData';

const StickyWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [quickMsg, setQuickMsg] = useState('');

  const sendWhatsApp = (customText) => {
    const textToSend = customText || quickMsg || "Hello Rajas Bestowals concierge! I would like to inquire about your cold-pressed oils and corporate gifting options.";
    const encoded = encodeURIComponent(textToSend);
    window.open(`https://wa.me/919845082741?text=${encoded}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="sticky-whatsapp-container">
      {/* Popover Bubble */}
      {isOpen && (
        <div className="whatsapp-chat-bubble">
          <div className="chat-bubble-header">
            <div className="chat-header-avatar">
              <span className="online-dot"></span>
              <MessageCircle size={22} color="#fff" />
            </div>
            <div className="chat-header-info">
              <strong>Rajas Bestowals Concierge</strong>
              <span>Typically replies in 5 minutes</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="chat-close-btn"
              aria-label="Close Chat"
            >
              <X size={18} />
            </button>
          </div>

          <div className="chat-bubble-body">
            <div className="chat-system-message">
              <p>
                Namaste! Welcome to Rajas Bestowals. How may we assist your family pantry or corporate gifting requirements today?
              </p>
              <span className="chat-timestamp">Karnataka Desk • Live</span>
            </div>

            {/* Quick Prompts */}
            <div className="quick-prompts-list">
              <button 
                type="button" 
                onClick={() => sendWhatsApp("Hi, I want to inquire about Rajas Signature Cooking Oil blend & benefits.")}
                className="prompt-chip"
              >
                Inquire about Signature Cooking Oil
              </button>
              <button 
                type="button" 
                onClick={() => sendWhatsApp("Hi, I want to book a bulk order / festival gifting hamper.")}
                className="prompt-chip"
              >
                Bulk & Corporate Gifting
              </button>
              <button 
                type="button" 
                onClick={() => sendWhatsApp("Hi, I am interested in your organic moringa powder & nutri bombs.")}
                className="prompt-chip"
              >
                Superfoods & Nutri Bombs
              </button>
            </div>

            {/* Custom Input */}
            <div className="chat-input-row">
              <input 
                type="text" 
                placeholder="Type your question..." 
                value={quickMsg}
                onChange={(e) => setQuickMsg(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') sendWhatsApp();
                }}
              />
              <button 
                onClick={() => sendWhatsApp()} 
                className="chat-send-btn"
                aria-label="Send WhatsApp message"
              >
                <Send size={15} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button 
        className="sticky-whatsapp-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Chat on WhatsApp"
        title="Chat with Rajas Bestowals Concierge"
      >
        <span className="pulse-ring"></span>
        <MessageCircle size={26} color="#fff" />
        <span className="btn-label-desktop">WhatsApp Concierge</span>
      </button>
    </div>
  );
};

export default StickyWhatsApp;
