import React from 'react';

const CheckoutSummary = ({ subtotal, taxRate, onClear, onCheckout }) => {
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  return (
    <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow-lg">
      <div className="flex justify-between text-sm text-gray-700 border-b pb-2 mb-2">
        <span>Subtotal:</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between text-sm text-gray-700 border-b pb-2 mb-2">
        <span>Tax (12%):</span>
        <span>${tax.toFixed(2)}</span>
      </div>
      <div className="flex justify-between font-bold text-gray-900 text-lg mb-4">
        <span>Total:</span>
        <span>${total.toFixed(2)}</span>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={onClear}
          className="bg-red-600 text-white rounded px-4 py-2 w-1/2 hover:bg-red-700 transition"
        >
          Clear All
        </button>
        <button
          onClick={onCheckout}
          className="bg-gray-500 text-white rounded px-4 py-2 w-1/2 hover:bg-gray-600 transition"
        >
          Check Out
        </button>
      </div>
    </div>
  );
};

export default CheckoutSummary;
