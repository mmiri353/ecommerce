import React, { useState } from 'react';
import './AdminPage.css'; // Custom CSS for styling

function AdminPage() {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    image: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to send data to your server (e.g., using fetch or axios)
    console.log('Product added:', product);
    // Reset form after submission
    setProduct({
      name: '',
      description: '',
      price: '',
      image: ''
    });
  };

  const handleLogout = () => {
    // Clear localStorage or sessionStorage (if using them for session management)
    localStorage.removeItem('user'); // Example if you store user info in localStorage
    // Redirect the user to the login page (if using React Router)
    window.location.href = '/login'; // Or use `navigate('/login')` if using `useNavigate`
  };

  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li>Dashboard</li>
          <li>Products</li>
          <li>Orders</li>
          <li onClick={handleLogout}>Logout</li> {/* Logout button in sidebar */}
        </ul>
      </div>
      <div className="admin-content">
        <h1>Add New Product</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Product Name</label>
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Description</label>
            <textarea
              name="description"
              value={product.description}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Price</label>
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Image URL</label>
            <input
              type="text"
              name="image"
              value={product.image}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit">Add Product</button>
        </form>
      </div>
    </div>
  );
}

export default AdminPage;
