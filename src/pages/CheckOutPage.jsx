import React from 'react';
import { useParams } from 'react-router-dom';

const CheckoutPage = ({ cartItems, onClearCart }) => {
  const navigate = useParams();
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCancel = () => navigate(-1);
  
  const handlePay = () => {
    alert('Payment successful!');
    onClearCart();
    navigate('/');
  };

  return (
    <div>
      <h1>Checkout</h1>
      {cartItems.map(item => (
        <div key={item.id}>
          <p>{item.title} x {item.quantity} - ${item.price * item.quantity}</p>
        </div>
      ))}
      <p>Total: ${total}</p>
      <button onClick={handleCancel}>Cancel</button>
      <button onClick={handlePay}>Pay</button>
    </div>
  );
};

export default CheckoutPage;