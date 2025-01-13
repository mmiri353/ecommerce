import React from 'react';
import './FeaturedProducts.css';

function FeaturedProducts() {
  const products = [
    { id: 1, name: 'Product 1', price: '$50', image: 'https://mojitech.net/wp-content/uploads/2021/07/Lenovo-Legion-5-82JU00BFED.webp' },
    { id: 2, name: 'Product 2', price: '$60', image: 'https://mojitech.net/wp-content/uploads/2021/07/Lenovo-Legion-5-82JU00BFED.webp' },
    { id: 3, name: 'Product 3', price: '$70', image: 'https://mojitech.net/wp-content/uploads/2021/07/Lenovo-Legion-5-82JU00BFED.webp' },
    { id: 4, name: 'Product 4', price: '$80', image: 'https://mojitech.net/wp-content/uploads/2021/07/Lenovo-Legion-5-82JU00BFED.webp' },
    { id: 5, name: 'Product 5', price: '$80', image: 'https://mojitech.net/wp-content/uploads/2021/07/Lenovo-Legion-5-82JU00BFED.webp' },
    { id: 6, name: 'Product 6', price: '$80', image: 'https://mojitech.net/wp-content/uploads/2021/07/Lenovo-Legion-5-82JU00BFED.webp' },
    { id: 7, name: 'Product 7', price: '$80', image: 'https://mojitech.net/wp-content/uploads/2021/07/Lenovo-Legion-5-82JU00BFED.webp' },
    { id: 8, name: 'Product 8', price: '$80', image: 'https://mojitech.net/wp-content/uploads/2021/07/Lenovo-Legion-5-82JU00BFED.webp' },
    
  ];

  return (
    <section className="featured-products">
      <h2>Featured Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;
