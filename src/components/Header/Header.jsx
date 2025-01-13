import React, { useState } from 'react';
import './Header.css'; 
import SignupLoginModal from '../Auth/SignupLoginModal';

function Header() {
  const [showModal, setShowModal] = useState(false);

  // Function to handle profile icon click
  const handleProfileClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <header className="header">
      <div className="logo">
        <img
          src="https://media.licdn.com/dms/image/v2/D4D0BAQEqZTx5nIC-nQ/company-logo_200_200/company-logo_200_200/0/1729784494337/devision_team_logo?e=2147483647&v=beta&t=G4QfmqA5-0nhYHF8LQ_zSL1XITpYuUXfBnIpvdvJVIg"
          alt="E-commerce"
        />
        <h3>E-commerce</h3>
      </div>
      <nav className="nav">
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
      <div className="search-cart">
        <input type="text" className="search-bar" placeholder="Search..." />
        <span className="cart-icon">🛒</span>
      
      
      <div className="profile" onClick={handleProfileClick}>
        <img
          src="https://previews.123rf.com/images/urfandadashov/urfandadashov1809/urfandadashov180902667/109317646-profile-pic-vector-icon-isolated-on-transparent-background-profile-pic-logo-concept.jpg"
          alt="Profile"
          className="profile-icon"
        />
        </div>
      </div>

      {/* Show Modal on Profile Click */}
      <SignupLoginModal show={showModal} onClose={handleCloseModal} />
    </header>
  );
}

export default Header;
