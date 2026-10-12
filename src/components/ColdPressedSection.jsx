import React, { useState } from 'react';
import { PRODUCTS } from '../data/productsData';
import { ShoppingBag, Check, Sparkles, Filter, Droplets, Sun, Wind, Shield } from 'lucide-react';

const ColdPressedSection = ({ onAddToCart, onShowToast }) => {
  const coldPressedProducts = PRODUCTS.filter(p => p.division === 'cold-pressed');
  const [filterType, setFilterType] = useState('all');
  const [addedIds, setAddedIds] = useState({});

  const filterOptions = [
    { key: 'all', label: 'All Varieties' },
    { key: 'coconut', label: 'Virgin Coconut' },
    { key: 'groundnut', label: 'Wood Pressed Peanut' },
    { key: 'sesame', label: 'Black Sesame Gingelly' },
    { key: 'mustard', label: 'Kacchi Ghani Mustard' }
  ];

  const filteredProducts = filterType === 'all' 
    ? coldPressedProducts 
    : coldPressedProducts.filter(p => p.type === filterType);

  const handleAdd = (product) => {
    onAddToCart({
      id: product.id,
      baseId: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
      volume: product.volume
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
    <section id="category-cold-pressed" className="site-section cold-pressed-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Category 02</span>
          <h2 className="section-title">Cold Pressed Oils</h2>
          <p className="section-subtitle">
            Coconut and every other cold-pressed variety. Pressed slowly in traditional wooden Kolhu churns — nothing added, nothing removed.
          </p>
        </div>

        {/* Short Story Strip on the Cold-Press Process per Designer Brief */}
        <div className="kolhu-story-strip">
          <div className="story-strip-header">
            <span className="badge-terracotta">THE TRADITIONAL KOLHU METHOD</span>
            <h3>How Pure Wood-Pressed Oil Is Bestowed</h3>
            <p>Our slow mechanical extraction honors centuries-old Ayurvedic traditions under ambient room temperature.</p>
          </div>

          <div className="story-steps-row">
            <div className="story-step-card">
              <div className="step-badge-num">1</div>
              <div className="step-icon-wrap">
                <Sun size={24} color="#A7533B" />
              </div>
              <h4>Sun-Dried Native Seeds</h4>
              <p>Hand-sorted sulphur-free copra, sun-dried Saurashtra peanuts, and unpolished sesame seeds.</p>
            </div>

            <div className="story-step-arrow">→</div>

            <div className="story-step-card">
              <div className="step-badge-num">2</div>
              <div className="step-icon-wrap">
                <Droplets size={24} color="#C6A46A" />
              </div>
              <h4>Slow Wooden Kolhu Churn</h4>
              <p>Pestle rotates slowly under 14 RPM. Temperature never exceeds 38°C, preserving vital enzymes.</p>
            </div>

            <div className="story-step-arrow">→</div>

            <div className="story-step-card">
              <div className="step-badge-num">3</div>
              <div className="step-icon-wrap">
                <Wind size={24} color="#5B7553" />
              </div>
              <h4>Natural Cotton Settling</h4>
              <p>Clarified through gravity and virgin cotton mesh. Zero chemical bleaching or high-speed centrifuges.</p>
            </div>

            <div className="story-step-arrow">→</div>

            <div className="story-step-card">
              <div className="step-badge-num">4</div>
              <div className="step-icon-wrap">
                <Shield size={24} color="#3A241D" />
              </div>
              <h4>Pristine Glass Bottling</h4>
              <p>Poured unadulterated into UV-resistant decanters to lock in authentic aroma and raw phytonutrients.</p>
            </div>
          </div>
        </div>

        {/* Variety Grid Filter Bar per brief */}
        <div className="variety-filter-container">
          <div className="filter-label-group">
            <Filter size={16} color="#A7533B" />
            <span>Filter by Oil Variety:</span>
          </div>
          <div className="filter-pill-buttons">
            {filterOptions.map((opt) => (
              <button
                key={opt.key}
                className={`filter-btn ${filterType === opt.key ? 'active' : ''}`}
                onClick={() => setFilterType(opt.key)}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="cold-pressed-grid">
          {filteredProducts.map((p) => {
            const isAdded = addedIds[p.id];
            return (
              <div key={p.id} className="luxury-product-card">
                <div className="card-thumb-wrap">
                  <img src={p.image} alt={p.name} className="product-thumb" loading="lazy" />
                  <span className="thumb-badge">{p.badge}</span>
                  {p.smokePoint && (
                    <span className="thumb-smoke-point">Smoke Point: {p.smokePoint}</span>
                  )}
                </div>

                <div className="card-info">
                  <h3 className="product-name">{p.name}</h3>
                  <p className="product-subtext">{p.subtitle}</p>
                  <p className="product-flavor">
                    <strong>Aroma & Flavor:</strong> {p.flavorProfile}
                  </p>

                  <div className="volume-price-row">
                    <span className="pack-volume">{p.volume}</span>
                    <span className="pack-price">₹{p.price}</span>
                  </div>

                  <button 
                    onClick={() => handleAdd(p)}
                    className="btn btn-terracotta btn-sm w-100"
                  >
                    {isAdded ? (
                      <>
                        <Check size={16} />
                        <span>Added to Cart</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag size={16} />
                        <span>Add to Cart • ₹{p.price}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ColdPressedSection;
