import React, { useState, useEffect, useRef } from 'react';
import { RajasLogo } from './LotusLogo';
import { 
  ShoppingBag, 
  Menu, 
  X, 
  Sparkles, 
  ArrowRight,
  Phone
} from 'lucide-react';

const Navbar = ({ cartCount, onOpenCart, onOpenBulkModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');


  // Track scroll position, active section spy, and scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 25);

      // Scroll progress percentage
      const winHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (winHeight > 0) {
        const progress = Math.min(100, Math.max(0, (scrollY / winHeight) * 100));
        setScrollProgress(progress);
      }

      // Scroll Spy for active section
      const sections = [
        'contact-location',
        'order-booking',
        'vision-mission',
        'about-us',
        'category-hair-oil',
        'category-superfoods',
        'category-cold-pressed',
        'category-cooking-oil',
        'four-divisions'
      ];

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      if (scrollY < 300) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 82;
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
    <header className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}>

      {/* 2. Main Luxury Navigation Bar */}
      <nav className="main-nav">
        <div className="container nav-container">
          {/* Logo with smooth scale and shimmer aura */}
          <a 
            href="#" 
            className="nav-logo" 
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            aria-label="Rajas Bestowals Home"
          >
            <div className="logo-hover-aura"></div>
            <RajasLogo size={36} variant="horizontal" />
          </a>

          {/* Desktop Navigation Links - Single line, no wrapping */}
          <ul className="nav-links">
            <li>
              <button 
                onClick={() => scrollToSection('category-cooking-oil')} 
                className={`nav-link ${activeSection === 'category-cooking-oil' ? 'active' : ''}`}
              >
                Cooking Oil
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('category-cold-pressed')} 
                className={`nav-link ${activeSection === 'category-cold-pressed' ? 'active' : ''}`}
              >
                Cold Pressed
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('category-superfoods')} 
                className={`nav-link ${activeSection === 'category-superfoods' ? 'active' : ''}`}
              >
                Superfoods
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('category-hair-oil')} 
                className={`nav-link ${activeSection === 'category-hair-oil' ? 'active' : ''}`}
              >
                Hair Oil
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('about-us')} 
                className={`nav-link ${activeSection === 'about-us' ? 'active' : ''}`}
              >
                About Us
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('vision-mission')} 
                className={`nav-link ${activeSection === 'vision-mission' ? 'active' : ''}`}
              >
                Vision & Mission
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contact-location')} 
                className={`nav-link ${activeSection === 'contact-location' ? 'active' : ''}`}
              >
                Contact
              </button>
            </li>
          </ul>

          {/* Right Action Tools with Shimmer CTA & Animated Cart Trigger */}
          <div className="nav-actions">
            {/* Shimmering Gold Corporate Bulk Booking Button */}
            <button 
              onClick={onOpenBulkModal}
              className="btn btn-gold-shimmer btn-sm d-none-mobile"
              title="Bulk & Corporate Gifting Enquiries"
            >
              <span className="shimmer-sweep"></span>
              <Sparkles size={14} className="action-sparkle" />
              <span>Bulk & Advance Booking</span>
            </button>

            {/* Cart Trigger with floating badge pulse */}
            <button 
              onClick={onOpenCart} 
              className={`cart-trigger-btn ${cartCount > 0 ? 'has-items' : ''}`}
              aria-label="View Shopping Cart"
            >
              <ShoppingBag size={19} className="cart-bag-icon" />
              {cartCount > 0 && (
                <span className="cart-badge-pulse">
                  <span className="badge-ping"></span>
                  <span className="badge-num">{cartCount}</span>
                </span>
              )}
            </button>

            {/* Mobile Menu Hamburger Toggle */}
            <button 
              className={`mobile-toggle-btn ${mobileMenuOpen ? 'is-active' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* 3. Smooth Top Scroll Progress Indicator */}
      <div className="nav-scroll-progress-track">
        <div 
          className="nav-scroll-progress-bar"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* 4. Glassmorphic Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-menu-content" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-menu-header">
              <RajasLogo size={32} variant="horizontal" />
              <button onClick={() => setMobileMenuOpen(false)} className="close-mobile-btn">
                <X size={22} />
              </button>
            </div>
            
            <div className="mobile-tagline">
              <span>Born of Royal Passion, Bestowed for your ultimate lifestyle</span>
            </div>

            <ul className="mobile-nav-links">
              <li>
                <button onClick={() => scrollToSection('category-cooking-oil')}>
                  <span>Cooking Oil</span>
                  <ArrowRight size={15} />
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('category-cold-pressed')}>
                  <span>Cold Pressed</span>
                  <ArrowRight size={15} />
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('category-superfoods')}>
                  <span>Superfoods</span>
                  <ArrowRight size={15} />
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('category-hair-oil')}>
                  <span>Hair Oil</span>
                  <ArrowRight size={15} />
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about-us')}>
                  <span>About Us</span>
                  <ArrowRight size={15} />
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('vision-mission')}>
                  <span>Vision & Mission</span>
                  <ArrowRight size={15} />
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact-location')}>
                  <span>Contact</span>
                  <ArrowRight size={15} />
                </button>
              </li>
            </ul>

            <div className="mobile-menu-footer">
              <button 
                onClick={() => { setMobileMenuOpen(false); onOpenBulkModal(); }} 
                className="btn btn-terracotta w-100"
              >
                <Sparkles size={16} /> Bulk & Advance Booking
              </button>
              <div className="mobile-concierge-pill">
                <Phone size={14} color="#A7533B" />
                <span>Concierge: <a href="tel:+919845082741">+91 98450 82741</a></span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
