import React from 'react';
import './Header.css'; // Import the CSS file
import { Link } from 'react-router-dom';
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa'; // Import the search icon

const Header = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-logo">
          FootyStore
        </a>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="/" className="nav-links">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-links">
              About
            </a>
          </li>
          <li className="nav-item">
          <Link to="/products" className="nav-links">
              Products
            </Link>
          </li>
          {/* <li className="nav-item">
            <a href="#" className="nav-links">
              Contact
            </a>
          </li> */}
          <li className="nav-item">
          <Link to="/search" className="nav-links">
              <FaSearch /> {/* Search icon */}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-links">
              <FaUser /> {/* Profile icon */}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="nav-links">
              <FaShoppingCart /> {/* Cart icon */}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
