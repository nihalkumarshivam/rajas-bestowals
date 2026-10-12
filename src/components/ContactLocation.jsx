import React, { useState } from 'react';
import { BRAND_INFO } from '../data/productsData';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageCircle, ExternalLink, Globe } from 'lucide-react';

const ContactLocation = ({ onShowToast }) => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Product Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
    if (onShowToast) {
      onShowToast("Thank you! Your enquiry has been received by Rajas Bestowals concierge.");
    }
  };

  return (
    <section id="contact-location" className="site-section contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Direct Concierge</span>
          <h2 className="section-title">Contact Us & Location</h2>
          <p className="section-subtitle">
            Whether for bespoke corporate gifting, hotel partnerships, or state distribution enquiries, our Karnataka team is at your royal service.
          </p>
        </div>

        {/* Dual Layout per Designer Brief: Form on left, Details and Map on right */}
        <div className="contact-dual-grid">
          {/* Form on Left per Brief */}
          <div className="contact-form-panel">
            <span className="badge-terracotta">ENQUIRY DISPATCH</span>
            <h3 className="form-panel-title">Send Us a Direct Message</h3>
            <p className="form-panel-sub">
              Our executive desk typically responds within 4 business hours.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="enquiry-form">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Smt. Malavika Hegde" 
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label>Phone / WhatsApp *</label>
                    <input 
                      type="tel" 
                      required 
                      placeholder="+91 98450 00000" 
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="malavika@domain.com" 
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Nature of Enquiry</label>
                  <select 
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="custom-select"
                  >
                    <option value="General Product Inquiry">General Retail & Product Inquiry</option>
                    <option value="Corporate / Festive Gifting">Corporate & Festive Gifting Consignment</option>
                    <option value="Hotel & Culinary Bulk Supply">Hotel & Fine Dining Bulk Cold-Pressed Supply</option>
                    <option value="Export & International Orders">Export & International Consignment (Abroad)</option>
                    <option value="Karnataka Farmer Partnership">Farmer Cooperative Partnership</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Your Message *</label>
                  <textarea 
                    rows="4" 
                    required 
                    placeholder="Please specify product divisions, delivery locations, or specific packaging customizations..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn btn-terracotta btn-lg w-100">
                  <Send size={18} />
                  <span>Submit Bestowal Enquiry</span>
                </button>
              </form>
            ) : (
              <div className="form-success-box">
                <CheckCircle2 size={40} color="#5B7553" />
                <h4>Message Received Gracefully</h4>
                <p>
                  Thank you, <strong>{form.name}</strong>. A copy of your inquiry has been routed to our Bengaluru Rural executive desk. We will reach you at <em>{form.email}</em> shortly.
                </p>
                <button 
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: '', phone: '', email: '', subject: 'General Product Inquiry', message: '' });
                  }}
                  className="btn btn-outline-gold btn-sm mt-3"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>

          {/* Details and Warm-Toned Map on Right per Brief */}
          <div className="contact-details-panel">
            <div className="details-card">
              <span className="badge-gold">KARNATAKA HEADQUARTERS</span>
              <h3 className="details-title">Rajas Bestowals Agro & FMCG</h3>

              <div className="contact-info-list">
                <div className="contact-info-item">
                  <div className="info-icon">
                    <MapPin size={20} color="#A7533B" />
                  </div>
                  <div className="info-text">
                    <strong>Manufacturing & Corporate Mills:</strong>
                    <p>{BRAND_INFO.contact.address}</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="info-icon">
                    <Phone size={20} color="#C6A46A" />
                  </div>
                  <div className="info-text">
                    <strong>Direct Concierge Desk:</strong>
                    <p>
                      <a href={`tel:${BRAND_INFO.contact.phone}`}>{BRAND_INFO.contact.phone}</a>
                    </p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="info-icon">
                    <Mail size={20} color="#5B7553" />
                  </div>
                  <div className="info-text">
                    <strong>Official Communications:</strong>
                    <p>
                      Domestic: <a href={`mailto:${BRAND_INFO.contact.email}`}>{BRAND_INFO.contact.email}</a> <br />
                      Export: <a href={`mailto:${BRAND_INFO.contact.exportEmail}`}>{BRAND_INFO.contact.exportEmail}</a>
                    </p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="info-icon">
                    <Clock size={20} color="#3A241D" />
                  </div>
                  <div className="info-text">
                    <strong>Visiting & Mill Hours:</strong>
                    <p>{BRAND_INFO.contact.workingHours}</p>
                  </div>
                </div>
              </div>

              {/* Muted Warm-Toned Map with Terracotta Pin per Designer Brief */}
              <div className="warm-map-container">
                <div className="warm-map-wrapper">
                  {/* Styled warm SVG Map representation of Bengaluru Rural, Karnataka */}
                  <svg viewBox="0 0 600 260" className="warm-map-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Background terrain */}
                    <rect width="600" height="260" fill="#F4EEE6" />
                    
                    {/* Stylized topography lines */}
                    <path d="M0 80 Q150 120 300 70 T600 90" stroke="rgba(198, 164, 106, 0.25)" strokeWidth="1.5" />
                    <path d="M0 160 Q200 130 400 190 T600 150" stroke="rgba(198, 164, 106, 0.25)" strokeWidth="1.5" />
                    <path d="M120 0 Q140 100 110 260" stroke="rgba(167, 83, 59, 0.15)" strokeWidth="1" strokeDasharray="4 4" />
                    <path d="M420 0 Q450 140 430 260" stroke="rgba(167, 83, 59, 0.15)" strokeWidth="1" strokeDasharray="4 4" />
                    
                    {/* Major Highway NH-44 Representation */}
                    <path d="M220 260 L380 0" stroke="#DFCCA6" strokeWidth="6" opacity="0.6" />
                    <path d="M220 260 L380 0" stroke="#C6A46A" strokeWidth="2" strokeDasharray="6 4" />

                    {/* Industrial Estate Zone */}
                    <circle cx="310" cy="130" r="42" fill="rgba(167, 83, 59, 0.1)" stroke="#A7533B" strokeWidth="1" strokeDasharray="2 2" />

                    {/* Terracotta Pin per Designer Brief */}
                    <g transform="translate(300, 100)">
                      <ellipse cx="10" cy="30" rx="6" ry="2.5" fill="rgba(58, 36, 29, 0.25)" />
                      <path 
                        d="M10 0 C4.5 0, 0 4.5, 0 10 C0 17.5, 10 30, 10 30 C10 30, 20 17.5, 20 10 C20 4.5, 15.5 0, 10 0 Z" 
                        fill="#A7533B" 
                        stroke="#FDFEFF" 
                        strokeWidth="1.5" 
                      />
                      <circle cx="10" cy="9.5" r="3.5" fill="#FDFEFF" />
                    </g>

                    {/* Map Labels */}
                    <rect x="235" y="145" width="150" height="30" rx="4" fill="#FDFEFF" stroke="#C6A46A" strokeWidth="1" />
                    <text x="310" y="164" fill="#3A241D" fontSize="10.5" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">
                      Rajas Bestowals Estate
                    </text>
                    <text x="50" y="40" fill="#9B8C86" fontSize="11" fontFamily="sans-serif">
                      Bengaluru Rural Agro Corridor
                    </text>
                  </svg>

                  <div className="map-overlay-footer">
                    <span className="map-badge">
                      <MapPin size={13} color="#A7533B" />
                      13.1986° N, 77.7066° E • Bengaluru Rural
                    </span>
                    <a 
                      href="https://maps.google.com" 
                      target="_blank" 
                      rel="noreferrer"
                      className="map-link-btn"
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="social-links-row">
                <span className="social-label">Connect with Us:</span>
                <div className="social-chips">
                  <a href="#instagram" className="social-chip">Instagram</a>
                  <a href="#linkedin" className="social-chip">LinkedIn</a>
                  <a href="#youtube" className="social-chip">YouTube</a>
                  <a href="#facebook" className="social-chip">Facebook</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactLocation;
