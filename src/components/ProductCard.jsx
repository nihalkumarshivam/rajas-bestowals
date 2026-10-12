import React from 'react';

const ProductCard = ({ name, price, size }) => {
  return (
    <div className="product-card">
      <div className="product-image">Oil Image Placeholder</div>
      <h3 className="product-name">{name}</h3>
      <p className="product-size">{size}</p>
      <p className="product-price">₹{price}</p>
      <button className="add-to-cart-btn">Add to Cart</button>
    </div>
  );
};

export default ProductCard;