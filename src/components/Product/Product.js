import React from 'react';
import { useState } from 'react';
import './Product.css';
import PropTypes from 'prop-types';

const Product = ({ product, closeModal, addToCart }) => {

  const [quantity, setQuantity] = useState(1);

  const handleAddToCartClick = () => {
    const selectedQuantity = Number(quantity); 
    addToCart(product, selectedQuantity);
    alert('Cart updated!!!!');
  };

  return (
    <div className="product-modal">
      <div className="product-modal-content">
        <span className="product-modal-close" onClick={closeModal}>
          &times;
        </span>
        <div className="product-modal-info">
          <img src={product.image} alt={product.name} className="product-modal-image" />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
        </div>
        <input
          type="number"
          value={quantity}
          min="1"
          max={product.stock}
          onChange={(e) => setQuantity(e.target.value)}
        />

        <button className="add-to-cart-btn" onClick={handleAddToCartClick}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
  closeModal: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default Product;


