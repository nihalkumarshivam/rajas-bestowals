import React from 'react';
import { STORY_TIMELINE, CORE_VALUES } from '../data/productsData';
import { LotusIcon } from './LotusLogo';
import { Award, ShieldCheck, Sparkles, Building2, Factory, Users, HeartHandshake } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about-us" className="site-section about-us-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Our Heritage & Integrity</span>
          <h2 className="section-title">About Us: Rajas Bestowals</h2>
          <p className="section-subtitle">
            An indigenous FMCG manufacturer founded to restore honest biological nutrition to daily staples — growing next into functional wellness ingredients.
          </p>
        </div>

        {/* Large Purpose Quote per Designer Brief */}
        <div className="purpose-quote-card">
          <div className="quote-emblem-badge">
            <LotusIcon size={44} color="#A7533B" goldColor="#C6A46A" />
          </div>
          <blockquote className="purpose-quote-text">
            "We did not build Rajas Bestowals merely to make oils and snacks. We created this brand to give genuine nutritional value back to the foods people buy every day — proving that age-old Indian craftsmanship and world-class quality standards can coexist in perfect grace."
          </blockquote>
          <div className="quote-attribution">
            <strong>The Leadership Board</strong>
            <span>Rajas Bestowals Agro & FMCG Pvt. Ltd., Karnataka</span>
          </div>
        </div>

        <div className="gold-hairline"></div>

        {/* Core Values Row: Luxury, Quality, Freshness per Designer Brief */}
        <div className="values-row-section">
          <div className="values-title-group">
            <span className="badge-gold">FOUNDATIONAL PILLARS</span>
            <h3>Our Three Royal Core Values</h3>
          </div>

          <div className="values-cards-grid">
            {CORE_VALUES.map((val) => (
              <div key={val.title} className="value-card">
                <div className="value-card-top">
                  <div className="value-number-circle">
                    <Sparkles size={18} color="#C6A46A" />
                  </div>
                  <span className="value-subtitle">{val.subtitle}</span>
                </div>
                <h4 className="value-title">{val.title}</h4>
                <p className="value-desc">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="gold-hairline"></div>

        {/* Story Timeline per Designer Brief */}
        <div className="timeline-section-wrapper">
          <div className="timeline-heading-block">
            <span className="badge-terracotta">THE JOURNEY OF GRACE</span>
            <h3>From Organic Groves to World-Class Standards</h3>
            <p>Tracing our evolution from native Karnataka farms to international FMCG scale.</p>
          </div>

          <div className="timeline-line-container">
            {STORY_TIMELINE.map((item, idx) => (
              <div key={item.year} className={`timeline-node ${idx % 2 === 1 ? 'node-alt' : ''}`}>
                <div className="timeline-marker">
                  <span className="node-year">{item.year}</span>
                </div>
                <div className="timeline-card">
                  <h4 className="node-title">{item.title}</h4>
                  <p className="node-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Factory & Manufacturing Credentials */}
        <div className="factory-credentials-bar">
          <div className="credential-box">
            <Factory size={24} color="#A7533B" />
            <div>
              <strong>Modern Clean-Room Bottling</strong>
              <span>Class 10,000 sterile air purification for zero external contaminants</span>
            </div>
          </div>

          <div className="credential-box">
            <Building2 size={24} color="#C6A46A" />
            <div>
              <strong>NABL-Accredited Lab Verifications</strong>
              <span>Every batch tested for peroxide value, acid value, and 0% hexane residues</span>
            </div>
          </div>

          <div className="credential-box">
            <Users size={24} color="#5B7553" />
            <div>
              <strong>Karnataka Farmer Co-ops</strong>
              <span>Guaranteed minimum support pricing & long-term sustainable contracts</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
