import React, { useState, useEffect } from 'react';
import ProductCard from '../Components/ProductCard';

function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const dummyProducts = [
      // ... (same as in HomePage)
      { 
        id: 7, 
        name: 'Flowy Beach Dress', 
        price: 69.99, 
        image: 'https://via.placeholder.com/300',
        category: 'Dresses'
      },
      { 
        id: 8, 
        name: 'Leather Biker Jacket', 
        price: 129.99, 
        image: 'https://via.placeholder.com/300',
        category: 'Outerwear'
      }
    ];
    setProducts(dummyProducts);
  }, []);

  return (
    <div className="product-list-page container">
      <h1>Our Complete Collection</h1>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductListPage;