import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="product-card">
      <img 
        src={product.image} 
        alt={product.name} 
        className="product-card-image"
        onLoad={() => setImageLoaded(true)}
        style={{
          opacity: imageLoaded ? 1 : 0,
          transition: 'opacity 0.3s ease'
        }}
        loading="lazy"
      />
      <div className="product-card-content">
        <h3>{product.name}</h3>
        <p>{product.category}</p>
        <p>${product.price.toFixed(2)}</p>
      </div>
      <div className="product-card-actions">
        <Link to={`/product/${product.id}`}>View Details</Link>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;