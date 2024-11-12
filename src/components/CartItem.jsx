import React from 'react';

const CartItem = ({ item, onIncrease, onDecrease }) => (
  <div className="flex items-center justify-between bg-gray-300 rounded-md p-2 shadow-sm">
    <img src={item.images[0]} alt={item.title} className="h-10 w-10 object-cover rounded mr-2" />
    <p className="flex-1 text-gray-700 text-sm">{item.title}</p>
    <div className="flex items-center space-x-2">
      <button onClick={() => onDecrease(item)} className="px-2 bg-gray-800 rounded hover:bg-gray-300">-</button>
      <span>{item.quantity}</span>
      <button onClick={() => onIncrease(item)} className="px-2 bg-gray-800 rounded hover:bg-gray-300">+</button>
    </div>
    <p className="w-16 text-right text-gray-700">${(item.price * item.quantity).toFixed(2)}</p>
  </div>
);

export default CartItem;
