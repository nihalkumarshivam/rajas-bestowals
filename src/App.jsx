import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VisionMission from './components/VisionMission';
import DivisionsOverview from './components/DivisionsOverview';
import CookingOilSection from './components/CookingOilSection';
import ColdPressedSection from './components/ColdPressedSection';
import SuperfoodsSection from './components/SuperfoodsSection';
import CosmeticsSection from './components/CosmeticsSection';
import AboutSection from './components/AboutSection';
import OrderBooking from './components/OrderBooking';
import ContactLocation from './components/ContactLocation';
import Footer from './components/Footer';
import StickyWhatsApp from './components/StickyWhatsApp';
import CartDrawer from './components/CartDrawer';
import Toast from './components/Toast';
import { PRODUCTS } from './data/productsData';
import './styles/global.scss';

function App() {
  // Pre-populate with signature items for instant vibrancy
  const [cartItems, setCartItems] = useState([
    {
      id: "wood-pressed-coconut-oil",
      baseId: "wood-pressed-coconut-oil",
      name: "Wood-Pressed Virgin Coconut Oil",
      price: 440,
      quantity: 1,
      image: PRODUCTS[1].image,
      volume: "1 Liter"
    },
    {
      id: "royal-nutri-bombs-bars-12-bars",
      baseId: "royal-nutri-bombs-bars",
      name: "Royal Dry Fruit Nutri Bombs & Bars (12 Bars Luxury Box)",
      price: 490,
      quantity: 1,
      image: PRODUCTS[5].image,
      volume: "12 Bars Luxury Box"
    }
  ]);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleAddToCart = (item) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i);
      }
      return [...prev, item];
    });
  };

  const handleUpdateQuantity = (id, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(id);
      return;
    }
    setCartItems(prev => prev.map(item => item.id === id ? { ...item, quantity: newQty } : item));
  };

  const handleRemoveItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
    showToast("Item removed from your Bestowals cart.");
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

  const handleOpenBulkModal = () => {
    scrollToSection('order-booking');
    showToast("Switched to Bulk & Advance Gifting Booking");
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="rajas-app">
      {/* 1. Navbar */}
      <Navbar 
        cartCount={totalCartCount} 
        onOpenCart={() => setIsCartOpen(true)}
        onOpenBulkModal={handleOpenBulkModal}
      />

      <main>
        {/* 2. Hero Section (PDF Page 1 & 2) */}
        <Hero 
          onExploreDivisions={() => scrollToSection('four-divisions')}
          onOpenOrder={() => scrollToSection('order-booking')}
        />


        {/* 3. Products: Four Divisions (PDF Page 4) */}
        <DivisionsOverview />

        {/* 4. Category 1: Cooking Oil (PDF Page 5) */}
        <CookingOilSection 
          onAddToCart={handleAddToCart} 
          onShowToast={showToast} 
        />

        {/* 5. Category 2: Cold Pressed Oils (PDF Page 6) */}
        <ColdPressedSection 
          onAddToCart={handleAddToCart} 
          onShowToast={showToast} 
        />

        {/* 6. Category 3: Superfoods (PDF Page 7) */}
        <SuperfoodsSection 
          onAddToCart={handleAddToCart} 
          onShowToast={showToast} 
        />

        {/* 7. Category 4: Hair Oil & Cosmetics (PDF Page 8) */}
        <CosmeticsSection onShowToast={showToast} />

        {/* 8. About Us: Rajas Bestowals (PDF Page 9) */}
        <AboutSection />

        {/* 9. Vision & Mission + Three Mission Markers Roadmap (PDF Page 3) */}
        <VisionMission />

        {/* 11. Order & Booking (PDF Page 11) */}
        <OrderBooking 
          cartItems={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
          onAddToCart={handleAddToCart}
          onShowToast={showToast}
        />

        {/* 12. Contact Us & Location (PDF Page 10) */}
        <ContactLocation onShowToast={showToast} />
      </main>

      {/* 13. Footer */}
      <Footer />

      {/* 14. Sticky Floating WhatsApp (PDF Page 10) */}
      <StickyWhatsApp />

      {/* 15. Slide-Over Cart Drawer */}
      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={() => scrollToSection('order-booking')}
      />

      {/* 16. Action Toast */}
      <Toast 
        message={toastMessage} 
        onClose={() => setToastMessage(null)} 
      />
    </div>
  );
}

export default App;