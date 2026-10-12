import React from 'react';
import { X, Trash2, ArrowRight, ShieldCheck, ShoppingBag, Truck } from 'lucide-react';

const CartDrawer = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onProceedToCheckout }) => {
  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const freeShippingThreshold = 999;
  const progressPercent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));
  const diffToFree = freeShippingThreshold - subtotal;

  return (
    <div className="cart-drawer-overlay" onClick={onClose}>
      <div className="cart-drawer-content" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="cart-drawer-header">
          <div className="drawer-title-group">
            <ShoppingBag size={20} color="#A7533B" />
            <h3>Your Bestowals Box</h3>
            <span className="drawer-count">({cartItems.reduce((a, b) => a + b.quantity, 0)})</span>
          </div>
          <button onClick={onClose} className="drawer-close-btn" aria-label="Close Cart">
            <X size={20} />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="free-shipping-progress">
          <div className="progress-info">
            <Truck size={15} color="#A7533B" />
            {subtotal >= freeShippingThreshold ? (
              <span className="progress-text-success">You've unlocked FREE Pan-India Delivery!</span>
            ) : (
              <span className="progress-text">
                Add <strong>₹{diffToFree}</strong> more to unlock <strong>FREE Pan-India Delivery</strong>
              </span>
            )}
          </div>
          <div className="progress-bar-track">
            <div 
              className="progress-bar-fill" 
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </div>

        {/* Cart Items List */}
        <div className="cart-drawer-items">
          {cartItems.length === 0 ? (
            <div className="cart-empty-state">
              <div className="empty-icon-circle">
                <ShoppingBag size={32} color="#9B8C86" />
              </div>
              <h4>Your Cart is Empty</h4>
              <p>Explore our royal divisions to add artisanal cold-pressed oils and organic superfoods.</p>
              <button onClick={onClose} className="btn btn-outline-gold btn-sm mt-3">
                Continue Browsing
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="drawer-cart-item">
                <img src={item.image} alt={item.name} className="drawer-item-img" />
                <div className="drawer-item-info">
                  <h4 className="drawer-item-title">{item.name}</h4>
                  <span className="drawer-item-vol">{item.volume}</span>
                  <div className="drawer-item-bottom">
                    <div className="drawer-qty-stepper">
                      <button 
                        type="button" 
                        onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        className="drawer-qty-btn"
                      >-</button>
                      <span className="drawer-qty-val">{item.quantity}</span>
                      <button 
                        type="button" 
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="drawer-qty-btn"
                      >+</button>
                    </div>
                    <span className="drawer-item-price">₹{item.price * item.quantity}</span>
                  </div>
                </div>
                <button 
                  type="button" 
                  onClick={() => onRemoveItem(item.id)}
                  className="drawer-item-remove"
                  title="Remove item"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="cart-drawer-footer">
            <div className="drawer-subtotal-row">
              <span>Subtotal</span>
              <span className="drawer-subtotal-val">₹{subtotal}</span>
            </div>
            <p className="drawer-tax-note">Taxes and delivery calculated at checkout.</p>

            <button 
              onClick={() => {
                onClose();
                onProceedToCheckout();
              }}
              className="btn btn-terracotta w-100 btn-lg"
            >
              <span>Proceed to Booking & Checkout</span>
              <ArrowRight size={18} />
            </button>

            <div className="drawer-trust-badge">
              <ShieldCheck size={14} color="#5B7553" />
              <span>Authentic Karnataka Kolhu Guaranteed</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
