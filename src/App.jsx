import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';  // Import the CategoryPage
import AdminPage from './admin/AdminPage'; // Import AdminPage

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} /> {/* Category route */}
        <Route path="/admin" element={<AdminPage />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
