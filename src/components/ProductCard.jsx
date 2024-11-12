import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  const imageUrl = product.images && product.images[0] ? product.images[0] : '/placeholder.jpg';

  return (
    <div className="shadow-lg rounded-lg p-4 bg-white text-center text-gray-700 transition-all duration-200 hover:scale-105 hover:shadow-xl">
      <img src={imageUrl} alt={product.title} className="h-32 w-full object-cover rounded-md mb-2" />
      <h3 className="text-lg font-medium mb-1">{product.title || 'New Product'}</h3>
      <p className="text-gray-500">Price: ${product.price}</p>
      <button
        onClick={() => onAddToCart(product)}
        className="bg-gray-800 text-white rounded px-4 py-2 mt-3 hover:bg-gray-900 transition duration-200"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
