import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const mockItems = {
  electronics: [
    { id: 1, name: 'Laptop', price: '$1000', image: 'https://via.placeholder.com/150?text=Laptop' },
    { id: 2, name: 'Smartphone', price: '$700', image: 'https://via.placeholder.com/150?text=Smartphone' },
  ],
  fashion: [
    { id: 1, name: 'T-shirt', price: '$20', image: 'https://via.placeholder.com/150?text=T-shirt' },
    { id: 2, name: 'Jeans', price: '$40', image: 'https://via.placeholder.com/150?text=Jeans' },
  ],
  home: [
    { id: 1, name: 'Sofa', price: '$500', image: 'https://img.lovepik.com/element/40068/1657.png_1200.png' },
    { id: 2, name: 'Lamp', price: '$30', image: 'https://via.placeholder.com/150?text=Lamp' },
  ],
  sports: [
    { id: 1, name: 'Football', price: '$25', image: 'https://via.placeholder.com/150?text=Football' },
    { id: 2, name: 'Tennis Racket', price: '$100', image: 'https://via.placeholder.com/150?text=Tennis+Racket' },
  ],
};

function CategoryPage() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    setProducts(mockItems[categoryName] || []);
  }, [categoryName]);

  // Inline styles
  const styles = {
    container: {
      padding: '20px',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    title: {
      textAlign: 'center',
      marginBottom: '20px',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '20px',
    },
    card: {
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '15px',
      textAlign: 'center',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    },
    image: {
      width: '100%',
      height: '150px',
      objectFit: 'cover',
      borderRadius: '8px',
      marginBottom: '10px',
    },
    cardTitle: {
      margin: '10px 0',
    },
    cardPrice: {
      color: '#555',
    },
    noProducts: {
      textAlign: 'center',
      color: '#777',
    },
  };

  return (
    <div>
      <Header />
      <div style={styles.container}>
        <h1 style={styles.title}>
          {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)} Products
        </h1>
        <div style={styles.grid}>
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product.id} style={styles.card}>
                <img src={product.image} alt={product.name} style={styles.image} />
                <h3 style={styles.cardTitle}>{product.name}</h3>
                <p style={styles.cardPrice}>{product.price}</p>
              </div>
            ))
          ) : (
            <p style={styles.noProducts}>
              No products found for {categoryName}.
            </p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CategoryPage;
