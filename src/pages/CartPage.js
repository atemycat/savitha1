import React from 'react';
import { Link } from 'react-router-dom';

function CartPage() {
  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>
      <p>Your cart is currently empty.</p>
      <Link to="/products" className="btn">Continue Shopping</Link>
    </div>
  );
}

export default CartPage;