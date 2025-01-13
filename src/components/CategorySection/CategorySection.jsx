import React from 'react';
import { Link } from 'react-router-dom';
import './CategorySection.css';

function CategorySection() {
  const categories = ['Electronics', 'Fashion', 'Home', 'Sports'];

  return (
    <section className="category-section">
      {categories.map((category, index) => (
        <Link to={`/category/${category.toLowerCase()}`} key={index} className="category-card">
          {category}
        </Link>
      ))}
    </section>
  );
}

export default CategorySection;
