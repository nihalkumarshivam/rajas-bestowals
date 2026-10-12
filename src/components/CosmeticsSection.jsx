import React, { useState } from 'react';
import { Sparkles, Mail, User, Phone, CheckCircle, Heart, ArrowRight, Flower2 } from 'lucide-react';
import confetti from 'canvas-confetti';

const CosmeticsSection = ({ onShowToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    concern: 'Hair Density & Strengthening'
  });
  const [submitted, setSubmitted] = useState(false);
  const [vipCode, setVipCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#C6A46A', '#A7533B', '#F4EEE6', '#DFCCA6']
      });
    } catch {
      // Fallback
    }

    const code = `RAJAS-VIP-${Math.floor(1000 + Math.random() * 9000)}`;
    setVipCode(code);
    setSubmitted(true);

    if (onShowToast) {
      onShowToast(`Welcome to the VIP Waitlist! Your code is ${code}`);
    }
  };

  return (
    <section id="category-hair-oil" className="site-section cosmetics-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Category 04</span>
          <h2 className="section-title">Hair Oil & Royal Cosmetics</h2>
          <p className="section-subtitle">
            Anointing rituals inspired by royal Indian beauty secrets. Hair oil debuts first, followed by a complete botanical luxury cosmetic line.
          </p>
        </div>

        {/* Teaser Hero with Blush Lotus Petal Glow per Designer Brief */}
        <div className="cosmetics-teaser-card">
          <div className="blush-glow-circle"></div>
          
          <div className="teaser-content-grid">
            {/* Left: Botanical Visual & Narrative */}
            <div className="teaser-left-visual">
              <div className="teaser-badge-row">
                <span className="badge-terracotta">COMING SOON</span>
                <span className="badge-gold">ROYAL AYURVEDIC ELIXIR</span>
              </div>

              <h3 className="teaser-hero-title">
                Rajas Royal Kesh Amrit <br />
                <span className="font-serif italic font-weight-normal">Botanical Hair Nectar</span>
              </h3>

              <p className="teaser-narrative">
                Slow-infused in copper vessels over gentle wood fire with 16 sacred botanicals, hand-harvested blush lotus petals, and virgin cold-pressed coconut oil. Formulated to calm the senses and awaken royal crown density.
              </p>

              {/* Botanical Infusion Badges */}
              <div className="botanicals-pills">
                <span className="botanical-pill">🌸 Blush Lotus Petals</span>
                <span className="botanical-pill">🌿 Pure Bhringraj</span>
                <span className="botanical-pill">🌱 Brahmi Leaves</span>
                <span className="botanical-pill">🥥 Cold-Pressed Virgin Coconut</span>
                <span className="botanical-pill">🌺 Hibiscus Roselle</span>
                <span className="botanical-pill">🌾 Vetiver Roots</span>
              </div>

              {/* Spa Ritual Note */}
              <div className="spa-ritual-note">
                <Flower2 size={16} color="#A7533B" />
                <span>Luxury Spa Experience: Warm 8–10 drops in palms, gently massage crown before sleep.</span>
              </div>
            </div>

            {/* Right: VIP Waitlist Form per Designer Brief */}
            <div className="teaser-right-form">
              {!submitted ? (
                <div className="waitlist-card">
                  <div className="waitlist-header">
                    <Sparkles size={20} color="#C6A46A" />
                    <h4>Join the Exclusive VIP Launch Waitlist</h4>
                    <p>Be the first to experience batch #001. Receive 20% privilege launch access & complimentary terracotta travel decanter.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="waitlist-form">
                    <div className="form-group">
                      <label htmlFor="vip-name">Your Full Name</label>
                      <div className="input-with-icon">
                        <User size={16} color="#9B8C86" />
                        <input 
                          id="vip-name"
                          type="text" 
                          required 
                          placeholder="e.g. Maharani Gayatri / Ananya Rao" 
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="vip-email">Email Address</label>
                      <div className="input-with-icon">
                        <Mail size={16} color="#9B8C86" />
                        <input 
                          id="vip-email"
                          type="email" 
                          required 
                          placeholder="concierge@example.com" 
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="vip-phone">WhatsApp Number (For VIP Dispatch Alerts)</label>
                      <div className="input-with-icon">
                        <Phone size={16} color="#9B8C86" />
                        <input 
                          id="vip-phone"
                          type="tel" 
                          placeholder="+91 98765 43210" 
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="vip-concern">Primary Hair & Scalp Focus</label>
                      <select 
                        id="vip-concern"
                        value={formData.concern}
                        onChange={(e) => setFormData({ ...formData, concern: e.target.value })}
                        className="custom-select"
                      >
                        <option value="Hair Density & Strengthening">Hair Density & Follicle Strength</option>
                        <option value="Dry Scalp & Deep Hydration">Dry Scalp & Calming Nourishment</option>
                        <option value="Gloss & Hair Texture Restoration">Radiant Gloss & Frizz Control</option>
                        <option value="Complete Ayurvedic Hair Care">Comprehensive Ayurvedic Routine</option>
                      </select>
                    </div>

                    <button type="submit" className="btn btn-terracotta w-100 btn-lg">
                      <span>Reserve My VIP Priority Access</span>
                      <ArrowRight size={18} />
                    </button>

                    <p className="waitlist-disclaimer">
                      Strictly limited to 500 early bottles. No spam, ever.
                    </p>
                  </form>
                </div>
              ) : (
                <div className="waitlist-success-card">
                  <div className="success-icon-wrap">
                    <CheckCircle size={48} color="#5B7553" />
                  </div>
                  <h3>You Are on the Royal VIP Register!</h3>
                  <p>
                    Thank you, <strong>{formData.name}</strong>. Your allocation for <strong>Rajas Royal Kesh Amrit</strong> has been prioritized.
                  </p>

                  <div className="vip-code-box">
                    <span className="vip-code-label">YOUR EXCLUSIVE PRIVILEGE CODE</span>
                    <span className="vip-code-value">{vipCode}</span>
                    <span className="vip-code-sub">Entitles you to 20% off + luxury packaging on official release</span>
                  </div>

                  <p className="vip-dispatch-note">
                    We will send preview tracking directly to <em>{formData.email}</em> when batch #001 begins small-batch bottling in Karnataka.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CosmeticsSection;
