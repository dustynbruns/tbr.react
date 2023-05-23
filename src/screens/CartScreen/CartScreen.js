import React from 'react';
import './CartScreen.css';

const CartScreen = ({ cart, onCheckout, subtotal, removeFromCart }) => {
  const handleCheckoutClick = () => {
    onCheckout();
  };

  return (
    <div className="cart-screen">
      <h1 className="cart-screen-title">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="cart-empty-message">Your cart is currently empty.</p>
      ) : (
        <div className='cart-items-container'>
          <ul className="cart-items-list">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-info">
                  <h2>{item.name}</h2>
                  <p>Quantity: {item.quantity}</p>
                  <button className="remove-from-cart-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <h2 className="cart-subtotal">Subtotal: ${subtotal.toFixed(2)}</h2>
          <button className="checkout-btn" onClick={handleCheckoutClick}>
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartScreen;
