import React from 'react';
import Cart from '../components/Cart';
import CheckoutSummary from '../components/CheckoutSummary';

const CartPage = ({ cartItems, onIncrease, onDecrease, onClear, onCheckout }) => {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4 text-black">Cart</h2>
      <Cart cartItems={cartItems} onIncrease={onIncrease} onDecrease={onDecrease} />
      <CheckoutSummary subtotal={subtotal} taxRate={0.12} onClear={onClear} onCheckout={onCheckout} />
    </div>
  );
};

export default CartPage;