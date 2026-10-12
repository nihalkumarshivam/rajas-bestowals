import React from 'react';
import { FOUR_DIVISIONS } from '../data/productsData';
import { ArrowUpRight, Sparkles } from 'lucide-react';

const DivisionsOverview = ({ onSelectDivision }) => {
  const scrollToDivision = (id) => {
    if (onSelectDivision) {
      onSelectDivision(id);
    }
    const element = document.getElementById(`category-${id}`);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="four-divisions" className="site-section divisions-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Curated Collections</span>
          <h2 className="section-title">Products: Four Divisions</h2>
          <p className="section-subtitle">
            Engineered around pure health, Ayurvedic legacy, and uncompromising nutritional rigour. Four foundational pillars of Rajas Bestowals.
          </p>
        </div>

        {/* Four Equal Cards (2x2 on Mobile per Designer Brief) */}
        <div className="divisions-grid">
          {FOUR_DIVISIONS.map((div) => (
            <div 
              key={div.id} 
              className="division-card"
              onClick={() => scrollToDivision(div.id)}
            >
              {/* Product Hero Backdrop */}
              <div className="division-image-wrapper">
                <img 
                  src={div.image} 
                  alt={div.title} 
                  className="division-img"
                  loading="lazy"
                />
                <div className="division-img-overlay"></div>
                <span className="division-number">{div.number}</span>
                <span className="division-badge">{div.badge}</span>
              </div>

              {/* Card Body */}
              <div className="division-content">
                <h3 className="division-title">{div.title}</h3>
                <h4 className="division-subtitle">{div.subtitle}</h4>
                <p className="division-desc">{div.desc}</p>

                {/* Highlights */}
                <div className="division-highlights">
                  {div.highlights.map((h, i) => (
                    <span key={i} className="highlight-tag">
                      • {h}
                    </span>
                  ))}
                </div>

                {/* Action CTA */}
                <div className="division-action">
                  <span className="action-text">Explore Division</span>
                  <div className="action-circle">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Later Phase Note per PDF Page 4 */}
        <div className="divisions-footer-note">
          <p className="italic-note">
            <span className="note-label">Roadmap:</span> Later phase: functional ingredients. Not needed on the site now.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DivisionsOverview;
