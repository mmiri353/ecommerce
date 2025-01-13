import React from 'react';
import Header from '../components/Header/Header';
import HeroBanner from '../components/HeroBanner/HeroBanner';
import CategorySection from '../components/CategorySection/CategorySection';
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts';
import Footer from '../components/Footer/Footer';

function HomePage() {
  return (
    <div>
      <Header />
      <HeroBanner />
      <CategorySection />
      <FeaturedProducts />
      <Footer />
    </div>
  );
}

export default HomePage;
