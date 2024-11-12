import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cartItems, onIncrease, onDecrease }) => (
  <div className="space-y-4 bg-gray-100 rounded-lg p-4">
    <h2 className="text-lg font-semibold text-gray-700">Cart</h2>
    {cartItems.length === 0 ? (
      <p className="text-gray-500">Your cart is empty.</p>
    ) : (
      cartItems.map(item => (
        <CartItem
          key={item.id}
          item={item}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
        />
      ))
    )}
  </div>
);

export default Cart;
