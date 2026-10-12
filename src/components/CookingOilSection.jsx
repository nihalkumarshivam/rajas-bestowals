import React, { useState } from 'react';
import { PRODUCTS } from '../data/productsData';
import { Heart, Activity, ShieldCheck, Flame, ShoppingBag, Check, Sparkles, Plus, Minus } from 'lucide-react';

const CookingOilSection = ({ onAddToCart, onShowToast }) => {
  const product = PRODUCTS.find(p => p.id === 'rajas-signature-cooking-oil') || PRODUCTS[0];
  const [selectedVolume, setSelectedVolume] = useState(product.volumeOptions[0]);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart({
      id: `${product.id}-${selectedVolume.label}`,
      baseId: product.id,
      name: `${product.name} (${selectedVolume.label})`,
      price: selectedVolume.price,
      quantity: quantity,
      image: product.image,
      volume: selectedVolume.label
    });
    setAdded(true);
    if (onShowToast) {
      onShowToast(`Added ${quantity}x ${product.name} (${selectedVolume.label}) to cart!`);
    }
    setTimeout(() => setAdded(false), 2200);
  };

  return (
    <section id="category-cooking-oil" className="site-section cooking-oil-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Category 01</span>
          <h2 className="section-title">Cooking Oil</h2>
          <p className="section-subtitle">
            Rajas Cooking Oil: The single proprietary blend for now. Engineered for daily high-heat Indian cooking without arterial compromise.
          </p>
        </div>

        {/* Dual Layout: Left Benefits & Narrative, Right Big Product Hero on Terracotta Ceramic */}
        <div className="cooking-oil-layout">
          {/* Left: Nutritional Benefits & Specs per Designer Brief */}
          <div className="oil-info-col">
            <div className="category-marker-badge">
              <Sparkles size={15} color="#A7533B" />
              <span>SINGLE PROPRIETARY VARIETY</span>
            </div>

            <h3 className="oil-headline">
              A Golden Symphony of Cold-Pressed Oils
            </h3>

            <p className="oil-lead-desc">
              Unlike industrial refined cooking oils exposed to high heat and chemical hexane solvents, Rajas Cooking Oil is an artisanal cold-pressed blend balanced specifically for cardiovascular longevity and authentic culinary richness.
            </p>

            {/* Benefit Icons per Brief: Low SFA, PUFA, MUFA, Zero Solvents */}
            <div className="benefit-icons-grid">
              <div className="benefit-card">
                <div className="benefit-icon-bubble terracotta">
                  <Heart size={22} color="#A7533B" />
                </div>
                <div className="benefit-texts">
                  <h4>Low in Saturated Fat (SFA)</h4>
                  <p>Less than 13% SFA to support arterial elasticity and cholesterol harmony.</p>
                </div>
              </div>

              <div className="benefit-card">
                <div className="benefit-icon-bubble gold">
                  <Activity size={22} color="#C6A46A" />
                </div>
                <div className="benefit-texts">
                  <h4>Rich in PUFA & MUFA</h4>
                  <p>Abundant Omega-3, 6, and 9 essential fatty acids for holistic cardiovascular wellness.</p>
                </div>
              </div>

              <div className="benefit-card">
                <div className="benefit-icon-bubble sage">
                  <ShieldCheck size={22} color="#5B7553" />
                </div>
                <div className="benefit-texts">
                  <h4>Zero Solvents & Chemicals</h4>
                  <p>100% mechanical cold extraction with no bleaching, degumming, or deodorizing agents.</p>
                </div>
              </div>

              <div className="benefit-card">
                <div className="benefit-icon-bubble espresso">
                  <Flame size={22} color="#3A241D" />
                </div>
                <div className="benefit-texts">
                  <h4>Stable Smoke Point</h4>
                  <p>Formulated for traditional Indian tadka, slow braises, and everyday wok sauteing.</p>
                </div>
              </div>
            </div>

            {/* Nutrition Facts Box per brief */}
            <div className="nutrition-facts-box mt-4">
              <div className="nutrition-title">
                Nutrition Profile
                <span>Per 100g Typical Values</span>
              </div>
              <div className="nutrition-row bold">
                <span>Energy</span>
                <span>{product.nutrition.energy}</span>
              </div>
              <div className="nutrition-row bold">
                <span>Total Good Fats</span>
                <span>{product.nutrition.totalFat}</span>
              </div>
              <div className="nutrition-row sub">
                <span>• Saturated Fatty Acids (Low SFA)</span>
                <span className="color-terracotta font-weight-bold">{product.nutrition.saturatedFat}</span>
              </div>
              <div className="nutrition-row sub">
                <span>• Monounsaturated Fatty Acids (MUFA)</span>
                <span>{product.nutrition.mufa}</span>
              </div>
              <div className="nutrition-row sub">
                <span>• Polyunsaturated Fatty Acids (PUFA)</span>
                <span>{product.nutrition.pufa}</span>
              </div>
              <div className="nutrition-row sub">
                <span>• Trans Fatty Acids</span>
                <span>0.0 g (100% Free)</span>
              </div>
              <div className="nutrition-row bold">
                <span>Natural Vitamin E</span>
                <span>{product.nutrition.vitaminE}</span>
              </div>
            </div>

            {/* Room for more varieties note */}
            <div className="oil-future-note">
              <span>◆ Room for more specialized regional blends in Phase 2</span>
            </div>
          </div>

          {/* Right: Big Product on Terracotta Ceramic Surface per brief */}
          <div className="oil-product-col">
            <div className="product-ceramic-pod">
              {/* Terracotta Ceramic Backdrop Frame */}
              <div className="ceramic-surface">
                <div className="product-badge-float">Signature Blend</div>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="product-hero-image"
                />
                <div className="oil-glow-ambiance"></div>
              </div>

              {/* Purchase Details Card */}
              <div className="product-details-panel">
                <h3 className="pod-product-name">{product.name}</h3>
                <p className="pod-subtitle">{product.subtitle}</p>

                {/* Volume Selector */}
                <div className="volume-selector-group">
                  <span className="selector-label">Select Volume Packaging:</span>
                  <div className="volume-chips">
                    {product.volumeOptions.map((opt) => (
                      <button
                        key={opt.label}
                        type="button"
                        className={`volume-chip ${selectedVolume.label === opt.label ? 'active' : ''}`}
                        onClick={() => setSelectedVolume(opt)}
                      >
                        <span className="chip-name">{opt.label}</span>
                        <span className="chip-price">₹{opt.price}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Pricing & Quantity Row */}
                <div className="pricing-quantity-row">
                  <div className="price-tag-wrap">
                    <span className="curr-symbol">₹</span>
                    <span className="curr-val">{selectedVolume.price * quantity}</span>
                    <span className="curr-tax">(Inclusive of all taxes)</span>
                  </div>

                  <div className="quantity-stepper">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="step-btn"
                      aria-label="Decrease quantity"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="qty-number">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="step-btn"
                      aria-label="Increase quantity"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>

                {/* Actions */}
                <div className="pod-actions">
                  <button 
                    onClick={handleAdd}
                    className="btn btn-terracotta btn-lg w-100"
                  >
                    {added ? (
                      <>
                        <Check size={18} />
                        <span>Added to Bestowals Cart</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag size={18} />
                        <span>Buy Rajas Cooking Oil</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="delivery-perk-line">
                  <span>✓ Fresh batch direct from Karnataka mills</span>
                  <span>✓ Food-grade UV protection bottle</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CookingOilSection;
