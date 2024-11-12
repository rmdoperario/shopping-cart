import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error("Error fetching products:", error));
  }, []);

  const handleAddToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      return existingItem
        ? prevItems.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
        : [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const handleIncreaseQuantity = (item) => {
    setCartItems(prevItems => 
      prevItems.map(cartItem => 
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      )
    );
  };

  const handleDecreaseQuantity = (item) => {
    setCartItems(prevItems => 
      prevItems.map(cartItem => 
        cartItem.id === item.id && cartItem.quantity > 1 ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
      )
    );
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      alert('Checkout successful!'); 
      handleClearCart(); 
    } else {
      alert('Your cart is empty. Please add items to checkout.');
    }
  };

  return (
    <Router>
      <div className="glowing-background min-h-screen text-white font-custom">
        <div className="container mx-auto p-4 grid grid-cols-3 gap-6">
          <div className="col-span-2">
            <Routes>
              <Route path="/" element={<HomePage products={products} filter={filter} setFilter={setFilter} onAddToCart={handleAddToCart} />} />
            </Routes>
          </div>
          <div className="col-span-1">
            <CartPage 
              cartItems={cartItems} 
              onIncrease={handleIncreaseQuantity} 
              onDecrease={handleDecreaseQuantity} 
              onClear={handleClearCart} 
              onCheckout={handleCheckout} 
            />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
