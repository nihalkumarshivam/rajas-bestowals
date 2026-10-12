import React from 'react';
import { RajasLogo, LotusIcon, LotusWatermark } from './LotusLogo';
import { ShieldCheck, Award, Sparkles, ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';

const Hero = ({ onExploreDivisions, onOpenOrder }) => {
  return (
    <section className="hero-section">
      {/* Decorative Lotus Watermark Background per Designer Brief */}
      <LotusWatermark className="hero-watermark-bg" />

      <div className="container hero-container">

        {/* Official Standard Brand Logo per User Asset */}
        <div className="hero-official-logo-wrapper">
          <div className="hero-emblem-glow"></div>
          <RajasLogo size={110} variant="stacked" withTagline={true} />
        </div>

        {/* Hero Pitch Headline per PDF Page 1 */}
        <div className="hero-copy-block">
          <h2 className="hero-main-heading">
            Born of Royal Passion, <br />
            <span className="gold-text-gradient">Bestowed for Your Ultimate Lifestyle</span>
          </h2>
          <p className="hero-lead-text">
            Revisiting ancient Indian wellness through artisanal wood-pressed oils, pure organic superfoods, and royal botanicals. Handcrafted from native Karnataka harvests to certified lab purity for the discerning Indian home and global connoisseurs.
          </p>
        </div>

        {/* CTAs */}
        <div className="hero-cta-group">
          <button onClick={onExploreDivisions} className="btn btn-terracotta btn-lg">
            <span>Explore 4 Divisions</span>
            <ArrowRight size={18} />
          </button>
          <button onClick={onOpenOrder} className="btn btn-outline-gold btn-lg">
            <Sparkles size={16} />
            <span>Order & Advance Booking</span>
          </button>
        </div>

        {/* Trust Badges Bar */}
        <div className="hero-trust-bar">
          <div className="trust-item">
            <div className="trust-icon-box">
              <ShieldCheck size={20} color="#A7533B" />
            </div>
            <div className="trust-text">
              <strong>100% Kolhu Pressed</strong>
              <span>Slow churned &lt;38°C</span>
            </div>
          </div>

          <div className="trust-divider"></div>

          <div className="trust-item">
            <div className="trust-icon-box">
              <Award size={20} color="#C6A46A" />
            </div>
            <div className="trust-text">
              <strong>World-Class Quality</strong>
              <span>NABL Lab Verified Pure</span>
            </div>
          </div>

          <div className="trust-divider"></div>

          <div className="trust-item">
            <div className="trust-icon-box">
              <CheckCircle2 size={20} color="#5B7553" />
            </div>
            <div className="trust-text">
              <strong>Karnataka Roots</strong>
              <span>Native Organic Harvests</span>
            </div>
          </div>

          <div className="trust-divider"></div>

          <div className="trust-item">
            <div className="trust-icon-box">
              <Sparkles size={20} color="#A7533B" />
            </div>
            <div className="trust-text">
              <strong>Zero Solvents</strong>
              <span>No Hexane, No Trans Fats</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hero-scroll-indicator" onClick={onExploreDivisions}>
          <span>Discover the Craft</span>
          <ChevronDown size={18} className="bounce-arrow" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
