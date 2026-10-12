import React, { useState } from 'react';
import { LotusWatermark, LotusIcon } from './LotusLogo';
import { Compass, Target, MapPin, Globe2, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

const VisionMission = () => {
  const [activeMarker, setActiveMarker] = useState('karnataka');

  const markerDetails = {
    karnataka: {
      title: "1. Karnataka Roots",
      tagline: "Native Farmland, Farmer Prosperity & Traditional Kolhu",
      desc: "Our journey begins in the fertile red soils of Karnataka. We collaborate directly with organic farming cooperatives, reviving ancient cold-press techniques (wooden Kolhu) and creating hundreds of dignified rural manufacturing jobs.",
      milestones: [
        "100% fair-price procurement from local farmer clusters",
        "Zero middleman exploitation & chemical-free seed testing",
        "Rural employment hubs across Mysore, Mandya & Bengaluru Rural"
      ],
      badge: "State Heritage Foundation"
    },
    india: {
      title: "2. Pan-India Scale",
      tagline: "Nationwide Distribution & Unadulterated Daily Nutrition",
      desc: "Bringing royal quality to everyday Indian households. Replacing refined, solvent-extracted oils with nutrient-dense, heart-healthy cold-pressed alternatives that meet stringent international quality benchmarks.",
      milestones: [
        "Pan-India direct-to-consumer delivery network across all 28 states",
        "B2B supply to premier wellness centers, luxury hotels & caterers",
        "NABL-accredited cold extraction testing for 0% trans-fat guarantee"
      ],
      badge: "Nationwide Movement"
    },
    abroad: {
      title: "3. Global Bestowals",
      tagline: "Taking Authentic Indian Royal Craft Abroad",
      desc: "Introducing ancient Vedic purity and artisanal craftsmanship to international wellness connoisseurs in the UAE, UK, North America, and Southeast Asia. Certified export grade packaging built for discerning palates.",
      milestones: [
        "US FDA & European organic compliance readiness",
        "Luxury gift boxes for royal weddings & diplomatic gifting",
        "Showcasing Karnataka's agricultural heritage to global retail"
      ],
      badge: "Global Ambassador"
    }
  };

  return (
    <section id="vision-mission" className="site-section vision-mission-section">
      {/* Background Watermark per brief: large faint lotus line-art watermark */}
      <LotusWatermark className="vision-watermark-bg" />

      <div className="container relative-z">
        <div className="section-header">
          <span className="section-tag">Guiding Light</span>
          <h2 className="section-title">Vision & Mission</h2>
          <p className="section-subtitle">
            An unwavering commitment to pure food, widespread rural employment, and global pride.
          </p>
        </div>

        {/* Dual Cards per brief: Vision and Mission as two cards */}
        <div className="vision-mission-cards-grid">
          {/* VISION CARD */}
          <div className="vm-card vision-card">
            <div className="vm-card-top">
              <div className="vm-icon-bubble">
                <Compass size={28} color="#A7533B" />
              </div>
              <span className="vm-type-tag">OUR VISION</span>
            </div>
            <h3 className="vm-heading">Purity In Every Home</h3>
            <blockquote className="vm-quote">
              "To serve people better-quality ingredients and better food products: organic, natural and healthy."
            </blockquote>
            <p className="vm-card-desc">
              We envision an India free from industrial refined solvent oils and chemically processed snacks. Every Rajas Bestowal product is a tribute to health, wholesome vitality, and ancestral wisdom.
            </p>
            <div className="vm-card-features">
              <span className="vm-pill"><CheckCircle2 size={14} color="#5B7553" /> 100% Organic & Clean</span>
              <span className="vm-pill"><CheckCircle2 size={14} color="#5B7553" /> Low SFA Formulations</span>
              <span className="vm-pill"><CheckCircle2 size={14} color="#5B7553" /> Unrefined & Chemical-Free</span>
            </div>
          </div>

          {/* MISSION CARD */}
          <div className="vm-card mission-card">
            <div className="vm-card-top">
              <div className="vm-icon-bubble">
                <Target size={28} color="#C6A46A" />
              </div>
              <span className="vm-type-tag gold">OUR MISSION</span>
            </div>
            <h3 className="vm-heading">Scale, Employment & Global Pride</h3>
            <blockquote className="vm-quote">
              "To scale big, creating employment across Karnataka and all of India, and to take our products abroad."
            </blockquote>
            <p className="vm-card-desc">
              Building an indigenous FMCG powerhouse that creates meaningful grassroots employment while asserting Indian craft, culinary luxury, and gifting grace on the global world stage.
            </p>
            <div className="vm-card-features">
              <span className="vm-pill"><CheckCircle2 size={14} color="#C6A46A" /> Rural Employment First</span>
              <span className="vm-pill"><CheckCircle2 size={14} color="#C6A46A" /> World-Class Standards</span>
              <span className="vm-pill"><CheckCircle2 size={14} color="#C6A46A" /> Global Export Ambition</span>
            </div>
          </div>
        </div>

        {/* Seamless Connector directly below Vision & Mission */}
        <div className="vm-markers-connector">
          <div className="connector-gold-line"></div>
          <div className="connector-pill-badge">
            <span className="bullet">◆</span>
            <span className="italic-text">Three Mission Markers: Karnataka &gt; India &gt; Abroad</span>
            <span className="bullet">◆</span>
          </div>
          <div className="connector-gold-line"></div>
        </div>

        {/* Three Mission Markers: Karnataka > India > Abroad */}
        <div className="mission-markers-box">
          <div className="markers-header">
            <div className="markers-title-row">
              <Sparkles size={18} color="#C6A46A" />
              <h4>Three Mission Markers</h4>
            </div>
            <p className="markers-subtitle">
              Our 3-stage strategic expansion roadmap: <strong>Karnataka &gt; India &gt; Abroad</strong>
            </p>
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="markers-nav-bar">
            <button 
              className={`marker-nav-btn ${activeMarker === 'karnataka' ? 'active' : ''}`}
              onClick={() => setActiveMarker('karnataka')}
            >
              <span className="marker-num">01</span>
              <span className="marker-name">Karnataka</span>
              <span className="marker-arrow">→</span>
            </button>

            <button 
              className={`marker-nav-btn ${activeMarker === 'india' ? 'active' : ''}`}
              onClick={() => setActiveMarker('india')}
            >
              <span className="marker-num">02</span>
              <span className="marker-name">India</span>
              <span className="marker-arrow">→</span>
            </button>

            <button 
              className={`marker-nav-btn ${activeMarker === 'abroad' ? 'active' : ''}`}
              onClick={() => setActiveMarker('abroad')}
            >
              <span className="marker-num">03</span>
              <span className="marker-name">Abroad</span>
            </button>
          </div>

          {/* Active Marker Detail Panel with Stylized Map & Visual */}
          <div className="marker-detail-card">
            <div className="marker-detail-content">
              <span className="badge-gold">{markerDetails[activeMarker].badge}</span>
              <h3 className="marker-detail-title">{markerDetails[activeMarker].title}</h3>
              <p className="marker-detail-tagline">{markerDetails[activeMarker].tagline}</p>
              <p className="marker-detail-desc">{markerDetails[activeMarker].desc}</p>

              <div className="marker-milestones-list">
                {markerDetails[activeMarker].milestones.map((m, idx) => (
                  <div key={idx} className="marker-milestone-item">
                    <CheckCircle2 size={16} color="#A7533B" />
                    <span>{m}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stylized Visual / India Map representation with Karnataka marked in Gold */}
            <div className="marker-map-visual">
              <div className="map-art-container">
                <svg viewBox="0 0 320 360" className="india-map-art" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Subtle India boundary silhouette */}
                  <path 
                    d="M150 40 C170 30, 190 50, 195 70 C200 90, 240 100, 250 120 C260 140, 245 160, 230 170 C240 190, 220 210, 210 230 C190 270, 160 310, 150 340 C140 310, 110 270, 95 240 C85 210, 80 180, 90 150 C80 130, 100 110, 120 90 C130 70, 140 50, 150 40 Z" 
                    fill="#F4EEE6" 
                    stroke="#C6A46A" 
                    strokeWidth="1.5"
                    strokeDasharray="3 3"
                  />
                  {/* Karnataka Highlight Zone marked in Gold per brief */}
                  <path 
                    d="M115 220 C125 215, 140 220, 142 245 C145 265, 135 285, 125 290 C115 280, 110 250, 115 220 Z" 
                    fill="url(#karnatakaGold)" 
                    stroke="#A7533B" 
                    strokeWidth="2"
                  />
                  {/* Radiant Radar Ripple on Karnataka */}
                  <circle cx="128" cy="250" r="16" stroke="#C6A46A" strokeWidth="1" opacity="0.6">
                    <animate attributeName="r" values="8;24" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.8;0" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="128" cy="250" r="5" fill="#A7533B" />
                  
                  {/* Text label */}
                  <text x="145" y="254" fill="#3A241D" fontSize="11" fontWeight="700" fontFamily="sans-serif">
                    Karnataka (HQ)
                  </text>

                  {/* Radiating routes to India & Abroad */}
                  <path d="M128 250 Q160 170 180 110" stroke="#C6A46A" strokeWidth="1.5" strokeDasharray="4 4" />
                  <text x="185" y="110" fill="#7A5822" fontSize="10" fontFamily="sans-serif">Pan-India</text>

                  <path d="M128 250 Q70 190 35 150" stroke="#A7533B" strokeWidth="1.5" strokeDasharray="4 4" />
                  <text x="10" y="145" fill="#A7533B" fontSize="10" fontWeight="600" fontFamily="sans-serif">Exports / Abroad</text>

                  <defs>
                    <linearGradient id="karnatakaGold" x1="115" y1="220" x2="142" y2="290" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#E8DCC4" />
                      <stop offset="1" stopColor="#C6A46A" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="map-badge-caption">
                  <MapPin size={14} color="#A7533B" />
                  <span>State of Karnataka Marked in Gold</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
