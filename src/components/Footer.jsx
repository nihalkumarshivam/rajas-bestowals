import React from 'react';
import { RajasLogo } from './LotusLogo';
import { BRAND_INFO } from '../data/productsData';
import { ShieldCheck, Heart, Award, ArrowUp, Mail, Phone, MapPin, Globe } from 'lucide-react';

const Footer = ({ onSelectDivision }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer className="site-footer">
      {/* Top Gold Hairline Divider */}
      <div className="footer-gold-line"></div>

      <div className="container footer-container">
        {/* Main Footer Grid */}
        <div className="footer-main-grid">
          {/* Brand Column */}
          <div className="footer-col brand-col">
            <RajasLogo size={42} variant="horizontal" light={true} />
            <p className="footer-brand-desc">
              Born of Royal Passion, Bestowed for your ultimate lifestyle. An indigenous FMCG manufacturer reintroducing authentic wood-pressed oils and nutrient-dense superfoods with world-class precision.
            </p>
            <div className="footer-mission-badge">
              <Globe size={14} color="#C6A46A" />
              <span>Three Mission Markers: Karnataka &gt; India &gt; Abroad</span>
            </div>
          </div>

          {/* Divisions Column */}
          <div className="footer-col">
            <h4 className="footer-heading">Four Divisions</h4>
            <ul className="footer-nav-list">
              <li>
                <button onClick={() => scrollToSection('category-cooking-oil')} className="footer-link">
                  01. Rajas Cooking Oil
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('category-cold-pressed')} className="footer-link">
                  02. Cold Pressed Kolhu Oils
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('category-superfoods')} className="footer-link">
                  03. Superfoods & Nutri Bombs
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('category-hair-oil')} className="footer-link">
                  04. Hair Oil & Cosmetics (VIP Waitlist)
                </button>
              </li>
              <li>
                <span className="footer-link-disabled">
                  05. Functional Ingredients (Phase 2)
                </span>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="footer-col">
            <h4 className="footer-heading">The Royal House</h4>
            <ul className="footer-nav-list">
              <li>
                <button onClick={() => scrollToSection('vision-mission')} className="footer-link">
                  Vision & Mission
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about-us')} className="footer-link">
                  Our FMCG Manufacturing Story
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about-us')} className="footer-link">
                  Traditional Kolhu Craft
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('order-booking')} className="footer-link">
                  Bulk & Corporate Gifting
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact-location')} className="footer-link">
                  Karnataka Mill Location & Map
                </button>
              </li>
            </ul>
          </div>

          {/* Concierge & Certifications Column */}
          <div className="footer-col">
            <h4 className="footer-heading">Karnataka Concierge</h4>
            <div className="footer-contact-block">
              <p>
                <Phone size={14} color="#C6A46A" />
                <span>+91 98450 82741</span>
              </p>
              <p>
                <Mail size={14} color="#C6A46A" />
                <span>concierge@rajasbestowals.com</span>
              </p>
              <p>
                <MapPin size={14} color="#C6A46A" />
                <span>Bengaluru Rural, Karnataka, India</span>
              </p>
            </div>

            <div className="footer-cert-tags">
              <span className="cert-pill">FSSAI Certified</span>
              <span className="cert-pill">NABL Lab Tested</span>
              <span className="cert-pill">Zero Solvent</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © {new Date().getFullYear()} <strong>Rajas Bestowals Agro & FMCG Pvt. Ltd.</strong> All Royal Rights Reserved.
          </p>

          <div className="footer-legal-links">
            <a href="#privacy">Privacy Charter</a>
            <span>•</span>
            <a href="#terms">Terms of Bestowal</a>
            <span>•</span>
            <a href="#fmcg">Global Quality Compliance</a>
          </div>

          <button onClick={scrollToTop} className="back-to-top-btn" aria-label="Back to Top">
            <span>Ascend</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
