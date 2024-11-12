import React from 'react';
import ProductList from '../components/ProductList';
import SearchBar from '../components/SearchBar';

const HomePage = ({ products, filter, setFilter, onAddToCart }) => {
  const filteredProducts = products.filter(product => 
    product.title.toLowerCase().includes(filter.toLowerCase())
  );    

  return (
    <div>
      <h1 className="text-5xl font-custom text-center mb-6 text-black">Shopping Cart App</h1>
      <SearchBar filter={filter} setFilter={setFilter} />
      <ProductList products={filteredProducts} onAddToCart={onAddToCart} />
    </div>
  );
};

export default HomePage;