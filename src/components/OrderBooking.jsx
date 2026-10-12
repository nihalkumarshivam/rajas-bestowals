import React, { useState } from 'react';
import { PRODUCTS } from '../data/productsData';
import { ShoppingBag, Check, ShieldCheck, Truck, Lock, ArrowRight, ArrowLeft, Phone, Mail, Sparkles, Building, Calendar, FileText, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

const OrderBooking = ({ cartItems, onUpdateQuantity, onRemoveItem, onAddToCart, onShowToast }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [orderType, setOrderType] = useState('retail'); // 'retail' or 'bulk'
  
  // Delivery form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    whatsapp: '',
    address: '',
    city: 'Bengaluru',
    state: 'Karnataka',
    pincode: '',
    preferredDate: '',
    organization: '',
    estimatedQuantity: '50-100 units',
    specialNotes: '',
    notificationPreference: 'both' // 'whatsapp', 'email', 'both'
  });

  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [confirmationData, setConfirmationData] = useState(null);

  // Calculate pricing
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const deliveryFee = subtotal > 999 || subtotal === 0 ? 0 : 99;
  const bulkDiscount = orderType === 'bulk' && subtotal > 2000 ? Math.round(subtotal * 0.15) : 0;
  const grandTotal = subtotal + deliveryFee - bulkDiscount;

  const handleNextStep = (e) => {
    e?.preventDefault();
    if (currentStep === 1) {
      if (cartItems.length === 0) {
        if (onShowToast) onShowToast("Please add at least one product before proceeding!");
        return;
      }
      setCurrentStep(2);
    } else if (currentStep === 2) {
      if (!formData.fullName || !formData.phone || (!formData.address && orderType === 'retail')) {
        if (onShowToast) onShowToast("Please fill in your contact and delivery details.");
        return;
      }
      // Generate Order confirmation
      const orderId = `RB-${Date.now().toString().slice(-6)}`;
      const conf = {
        orderId,
        date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
        items: [...cartItems],
        total: grandTotal,
        customer: { ...formData },
        orderType
      };
      setConfirmationData(conf);
      setCurrentStep(3);
      setOrderConfirmed(true);

      try {
        confetti({
          particleCount: 90,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#A7533B', '#C6A46A', '#3A241D']
        });
      } catch {}

      if (onShowToast) {
        onShowToast(`Order ${orderId} confirmed successfully! Confirmation sent via WhatsApp.`);
      }
    }
  };

  const handleWhatsAppSend = () => {
    if (!confirmationData) return;
    const itemsList = confirmationData.items.map(i => `• ${i.name} x${i.quantity} (₹${i.price * i.quantity})`).join('%0A');
    const msg = `*RAJAS BESTOWALS ORDER CONFIRMATION*%0AOrder ID: ${confirmationData.orderId}%0AName: ${formData.fullName}%0AType: ${orderType.toUpperCase()}%0A%0A*Items:*%0A${itemsList}%0A%0A*Total Amount:* ₹${confirmationData.total}%0ADelivery Address: ${formData.address}, ${formData.city}, ${formData.state} - ${formData.pincode}%0A%0A_Please acknowledge receipt from Karnataka mills._`;
    window.open(`https://wa.me/919845082741?text=${msg}`, '_blank');
  };

  return (
    <section id="order-booking" className="site-section order-booking-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Smooth Checkout</span>
          <h2 className="section-title">Order & Advance Booking</h2>
          <p className="section-subtitle">
            Seamless retail checkout or royal corporate gifting bookings. Minimal distractions, secure processing, and instant WhatsApp dispatch notice.
          </p>
        </div>

        {/* Step Bar per Designer Brief: Select > Details > Confirm */}
        <div className="checkout-steps">
          <div className={`step-item ${currentStep === 1 ? 'active' : currentStep > 1 ? 'completed' : ''}`}>
            <span className="step-number">{currentStep > 1 ? '✓' : '1'}</span>
            <span className="step-label">Select Products</span>
          </div>
          <div className="step-connector"></div>
          <div className={`step-item ${currentStep === 2 ? 'active' : currentStep > 2 ? 'completed' : ''}`}>
            <span className="step-number">{currentStep > 2 ? '✓' : '2'}</span>
            <span className="step-label">Delivery & Booking Details</span>
          </div>
          <div className="step-connector"></div>
          <div className={`step-item ${currentStep === 3 ? 'active' : ''}`}>
            <span className="step-number">3</span>
            <span className="step-label">Order Confirmation</span>
          </div>
        </div>

        {/* Mode Toggle: Retail vs Bulk / Advance Orders */}
        <div className="order-mode-toggle-wrap">
          <div className="order-mode-pill">
            <button 
              type="button"
              className={`mode-btn ${orderType === 'retail' ? 'active' : ''}`}
              onClick={() => setOrderType('retail')}
            >
              Standard Household Delivery
            </button>
            <button 
              type="button"
              className={`mode-btn ${orderType === 'bulk' ? 'active' : ''}`}
              onClick={() => setOrderType('bulk')}
            >
              <Sparkles size={14} /> Bulk & Advance Booking (Corporate / Weddings)
            </button>
          </div>
        </div>

        {/* Layout: Main Checkout Panel + Persistent Visible Order Summary Card per brief */}
        <div className="checkout-dual-layout">
          {/* Main Interactive Flow */}
          <div className="checkout-main-content">
            {currentStep === 1 && (
              <div className="step-1-panel">
                <div className="step-title-row">
                  <h3>Choose Products to Add to Bestowals Box</h3>
                  <p>Pick from our flagship cold-pressed oils and nutrient-dense superfoods.</p>
                </div>

                {/* Quick Add Catalog Grid */}
                <div className="quick-catalog-grid">
                  {PRODUCTS.map(p => {
                    const inCart = cartItems.find(item => item.baseId === p.id || item.id === p.id);
                    return (
                      <div key={p.id} className="quick-product-card">
                        <img src={p.image} alt={p.name} className="quick-thumb" />
                        <div className="quick-info">
                          <span className="quick-badge">{p.divisionTitle}</span>
                          <h4 className="quick-name">{p.name}</h4>
                          <span className="quick-vol">{p.volume}</span>
                          <div className="quick-price-row">
                            <span className="quick-price">₹{p.price}</span>
                            <button
                              type="button"
                              className={`btn btn-sm ${inCart ? 'btn-gold' : 'btn-terracotta'}`}
                              onClick={() => {
                                onAddToCart({
                                  id: p.id,
                                  baseId: p.id,
                                  name: p.name,
                                  price: p.price,
                                  quantity: 1,
                                  image: p.image,
                                  volume: p.volume
                                });
                                if (onShowToast) onShowToast(`Added ${p.name} to checkout selection!`);
                              }}
                            >
                              {inCart ? `In Cart (${inCart.quantity}) +` : '+ Add'}
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {cartItems.length > 0 && (
                  <div className="step-action-footer">
                    <button onClick={() => setCurrentStep(2)} className="btn btn-terracotta btn-lg">
                      <span>Proceed to Delivery Details</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                )}
              </div>
            )}

            {currentStep === 2 && (
              <form onSubmit={handleNextStep} className="step-2-form">
                <div className="step-title-row">
                  <h3>
                    {orderType === 'bulk' ? 'Corporate & Advance Booking Details' : 'Shipping & Dispatch Information'}
                  </h3>
                  <p>Order confirmation dispatched instantly via WhatsApp & Email.</p>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Ramesh Hegde" 
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>Email Address *</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="ramesh@example.com" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input 
                      type="tel" 
                      required 
                      placeholder="+91 98450 12345" 
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>WhatsApp Number (For Order Updates) *</label>
                    <input 
                      type="tel" 
                      placeholder="+91 98450 12345" 
                      value={formData.whatsapp || formData.phone}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    />
                  </div>

                  {orderType === 'bulk' && (
                    <>
                      <div className="form-group">
                        <label>Company / Organization / Family Name</label>
                        <input 
                          type="text" 
                          placeholder="e.g. Infosys Luxury Gifting Committee" 
                          value={formData.organization}
                          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        />
                      </div>

                      <div className="form-group">
                        <label>Required Dispatch Date (Advance Booking)</label>
                        <input 
                          type="date" 
                          value={formData.preferredDate}
                          onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        />
                      </div>
                    </>
                  )}
                </div>

                <div className="form-group">
                  <label>Delivery Address *</label>
                  <textarea 
                    rows="3" 
                    required 
                    placeholder="House/Apartment #, Street, Landmark, Area" 
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  />
                </div>

                <div className="form-grid-3">
                  <div className="form-group">
                    <label>City *</label>
                    <input 
                      type="text" 
                      required 
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>State *</label>
                    <input 
                      type="text" 
                      required 
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>PIN Code *</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="560001" 
                      value={formData.pincode}
                      onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                    />
                  </div>
                </div>

                {orderType === 'bulk' && (
                  <div className="form-group">
                    <label>Custom Gifting Inscription or Bulk Packaging Instructions</label>
                    <textarea 
                      rows="2" 
                      placeholder="e.g. Include custom gold foil greeting cards for Diwali with royal seal"
                      value={formData.specialNotes}
                      onChange={(e) => setFormData({ ...formData, specialNotes: e.target.value })}
                    />
                  </div>
                )}

                <div className="form-nav-buttons">
                  <button type="button" onClick={() => setCurrentStep(1)} className="btn btn-outline-gold">
                    <ArrowLeft size={16} />
                    <span>Back to Products</span>
                  </button>
                  <button type="submit" className="btn btn-terracotta btn-lg">
                    <span>Confirm Order & Dispatch</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              </form>
            )}

            {currentStep === 3 && confirmationData && (
              <div className="step-3-confirmation">
                <div className="confirmation-header-card">
                  <div className="confirm-icon-bubble">
                    <CheckCircle2 size={44} color="#5B7553" />
                  </div>
                  <h3>Order Bestowed Successfully!</h3>
                  <p className="order-num-tag">Reference No: <strong>{confirmationData.orderId}</strong></p>
                  <p className="order-subtext">
                    Your request has been routed to our Bengaluru Rural facility. A digital receipt and live packaging tracking details have been logged.
                  </p>
                </div>

                <div className="confirmation-details-box">
                  <h4>Order Summary Details</h4>
                  <div className="confirm-items-list">
                    {confirmationData.items.map(item => (
                      <div key={item.id} className="confirm-item-row">
                        <span>{item.name} x {item.quantity}</span>
                        <strong>₹{item.price * item.quantity}</strong>
                      </div>
                    ))}
                  </div>

                  <div className="gold-hairline-sm"></div>

                  <div className="confirm-total-row">
                    <span>Total Payable:</span>
                    <strong>₹{confirmationData.total}</strong>
                  </div>

                  <div className="confirm-shipping-info">
                    <p><strong>Deliver To:</strong> {formData.fullName}</p>
                    <p>{formData.address}, {formData.city}, {formData.state} - {formData.pincode}</p>
                    <p><strong>Phone:</strong> {formData.phone}</p>
                  </div>
                </div>

                <div className="confirmation-actions">
                  <button onClick={handleWhatsAppSend} className="btn btn-terracotta btn-lg">
                    <Phone size={18} />
                    <span>Send Order Copy to WhatsApp (+91 98450 82741)</span>
                  </button>
                  <button 
                    onClick={() => {
                      setCurrentStep(1);
                      setOrderConfirmed(false);
                    }} 
                    className="btn btn-outline-gold"
                  >
                    Place Another Order
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Sticky Visible Order Summary Card per Designer Brief */}
          <aside className="checkout-summary-sidebar">
            <div className="order-summary-card">
              <div className="summary-header">
                <ShoppingBag size={18} color="#A7533B" />
                <h4>Order Summary</h4>
                <span className="items-count-badge">{cartItems.reduce((a, b) => a + b.quantity, 0)} items</span>
              </div>

              {cartItems.length === 0 ? (
                <div className="empty-cart-notice">
                  <p>Your basket is currently empty.</p>
                  <span className="hint-text">Choose products from Step 1 above to begin your bestowal.</span>
                </div>
              ) : (
                <div className="summary-items-list">
                  {cartItems.map((item) => (
                    <div key={item.id} className="summary-item">
                      <img src={item.image} alt={item.name} className="summary-item-img" />
                      <div className="summary-item-details">
                        <span className="summary-item-name">{item.name}</span>
                        <span className="summary-item-vol">{item.volume}</span>
                        <div className="summary-item-qty-row">
                          <button 
                            type="button"
                            className="qty-btn"
                            onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          >-</button>
                          <span className="item-qty">{item.quantity}</span>
                          <button 
                            type="button"
                            className="qty-btn"
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          >+</button>
                          <span className="summary-item-price">₹{item.price * item.quantity}</span>
                        </div>
                      </div>
                      <button 
                        type="button"
                        className="remove-item-btn" 
                        onClick={() => onRemoveItem(item.id)}
                        title="Remove"
                      >×</button>
                    </div>
                  ))}
                </div>
              )}

              <div className="gold-hairline"></div>

              {/* Price Calculation Table */}
              <div className="summary-math">
                <div className="math-row">
                  <span>Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>

                {bulkDiscount > 0 && (
                  <div className="math-row text-success">
                    <span>Bulk Privilege Savings (15%)</span>
                    <span>-₹{bulkDiscount}</span>
                  </div>
                )}

                <div className="math-row">
                  <span>Pan-India Delivery</span>
                  <span>{deliveryFee === 0 ? <strong className="color-sage">FREE</strong> : `₹${deliveryFee}`}</span>
                </div>

                <div className="math-row total-row">
                  <span>Grand Total</span>
                  <span className="grand-price">₹{grandTotal}</span>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="summary-trust-strip">
                <div className="trust-micro">
                  <Lock size={14} color="#5B7553" />
                  <span>256-Bit Encrypted Transaction</span>
                </div>
                <div className="trust-micro">
                  <Truck size={14} color="#C6A46A" />
                  <span>Fresh Batch Dispatch in 24 Hours</span>
                </div>
                <div className="trust-micro">
                  <ShieldCheck size={14} color="#A7533B" />
                  <span>Payment Gateway: Integrated on Final Step</span>
                </div>
              </div>

              {currentStep === 1 && cartItems.length > 0 && (
                <button 
                  onClick={() => setCurrentStep(2)} 
                  className="btn btn-terracotta w-100 mt-3"
                >
                  Proceed to Details ({cartItems.reduce((a, b) => a + b.quantity, 0)} items)
                </button>
              )}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default OrderBooking;
