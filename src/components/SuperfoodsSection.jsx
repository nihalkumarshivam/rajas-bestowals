import React, { useState } from 'react';
import { PRODUCTS } from '../data/productsData';
import { Dumbbell, Zap, Sparkles, Check, ShoppingBag, Leaf, Award } from 'lucide-react';

const SuperfoodsSection = ({ onAddToCart, onShowToast }) => {
  const superfoods = PRODUCTS.filter(p => p.division === 'superfoods');
  const [selectedVolumes, setSelectedVolumes] = useState({
    'royal-nutri-bombs-bars': superfoods[0]?.volumeOptions[1] || superfoods[0]?.volumeOptions[0],
    'organic-moringa-leaf-powder': superfoods[1]?.volumeOptions[0]
  });
  const [addedIds, setAddedIds] = useState({});

  const handleSelectVolume = (productId, option) => {
    setSelectedVolumes(prev => ({
      ...prev,
      [productId]: option
    }));
  };

  const handleAdd = (product) => {
    const vol = selectedVolumes[product.id] || product.volumeOptions[0];
    onAddToCart({
      id: `${product.id}-${vol.label}`,
      baseId: product.id,
      name: `${product.name} (${vol.label})`,
      price: vol.price,
      quantity: 1,
      image: product.image,
      volume: vol.label
    });
    setAddedIds(prev => ({ ...prev, [product.id]: true }));
    if (onShowToast) {
      onShowToast(`Added ${product.name} to cart!`);
    }
    setTimeout(() => {
      setAddedIds(prev => ({ ...prev, [product.id]: false }));
    }, 2000);
  };

  return (
    <section id="category-superfoods" className="site-section superfoods-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Category 03</span>
          <h2 className="section-title">Superfoods & Clean Fuel</h2>
          <p className="section-subtitle">
            Curated specifically for health-conscious buyers, gym-goers, and sports professionals. Clean, nutrient-dense vitality without refined sugars or synthetic fillers.
          </p>
        </div>

        {/* Target Audience Highlight Bar */}
        <div className="superfoods-audience-banner">
          <div className="audience-pill">
            <Dumbbell size={16} color="#A7533B" />
            <span>Pre & Post Workout Recovery</span>
          </div>
          <div className="audience-pill">
            <Zap size={16} color="#C6A46A" />
            <span>Natural Endurance & Sustained Energy</span>
          </div>
          <div className="audience-pill">
            <Leaf size={16} color="#5B7553" />
            <span>Single-Estate Whole Food Nutrition</span>
          </div>
        </div>

        {/* Alternating Product Rows with Nutrition Facts Panel per Designer Brief */}
        <div className="superfoods-alternating-rows">
          {superfoods.map((item, index) => {
            const isReversed = index % 2 === 1;
            const currentVol = selectedVolumes[item.id] || item.volumeOptions[0];
            const isAdded = addedIds[item.id];

            return (
              <div 
                key={item.id} 
                className={`superfood-row ${isReversed ? 'row-reversed' : ''}`}
              >
                {/* Visual Image Presentation in Ceramic/Brass aesthetic */}
                <div className="superfood-visual-col">
                  <div className="superfood-image-frame">
                    <img src={item.image} alt={item.name} className="superfood-img" loading="lazy" />
                    <span className="superfood-float-badge">{item.badge}</span>
                  </div>
                  <div className="audience-target-tag">
                    <strong>Ideal For:</strong> {item.targetAudience}
                  </div>
                </div>

                {/* Product Narrative & Interactive Nutrition Facts Panel */}
                <div className="superfood-info-col">
                  <span className="badge-gold">NATURAL SUPERFOOD</span>
                  <h3 className="superfood-item-name">{item.name}</h3>
                  <p className="superfood-item-sub">{item.subtitle}</p>
                  <p className="superfood-item-desc">{item.fullDesc}</p>

                  {/* Dynamic Nutrition Facts Panel per Brief */}
                  <div className="nutrition-facts-box">
                    <div className="nutrition-title">
                      Verified Nutritional Profile
                      <span>Serving: {item.nutrition.servingSize}</span>
                    </div>
                    {Object.entries(item.nutrition)
                      .filter(([k]) => k !== 'servingSize')
                      .map(([key, val]) => (
                        <div key={key} className="nutrition-row">
                          <span className="text-capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                          <span className="font-weight-bold color-espresso">{val}</span>
                        </div>
                      ))}
                  </div>

                  {/* Volume Options & Cart Action */}
                  <div className="superfood-purchase-box">
                    <div className="volume-chips-compact">
                      {item.volumeOptions.map(opt => (
                        <button
                          key={opt.label}
                          type="button"
                          className={`vol-pill ${currentVol.label === opt.label ? 'active' : ''}`}
                          onClick={() => handleSelectVolume(item.id, opt)}
                        >
                          <span>{opt.label}</span>
                          <strong>₹{opt.price}</strong>
                        </button>
                      ))}
                    </div>

                    <button 
                      onClick={() => handleAdd(item)}
                      className="btn btn-terracotta btn-md"
                    >
                      {isAdded ? (
                        <>
                          <Check size={16} />
                          <span>Added to Cart</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag size={16} />
                          <span>Order {currentVol.label} • ₹{currentVol.price}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Phase 2 Superfoods Roadmap Banner */}
        <div className="superfoods-roadmap-banner">
          <div className="roadmap-inner">
            <Sparkles size={20} color="#C6A46A" />
            <div className="roadmap-text">
              <h4>Upcoming in Superfoods: Kashmiri Saffron Trail Mixes & Cold-Milled Seed Butters</h4>
              <p>Formulated in accordance with sports nutrition science and ancient Rasayana herbology.</p>
            </div>
            <span className="badge-gold">Phase 2 In Pipeline</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuperfoodsSection;
