// src/pages/CategoryPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function CategoryPage() {
  const { categoryName } = useParams(); // Get the category name from the URL

  return (
    <div>
      <Header />
      <div className="category-page">
        <h1>{categoryName.charAt(0).toUpperCase() + categoryName.slice(1)} Products</h1>
        {/* You can display products here based on the category */}
        <p>Displaying {categoryName} products...</p>
      </div>
      <Footer />
    </div>
  );
}

export default CategoryPage;
