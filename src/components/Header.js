import "./Header.css";
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { useUser } from './UserContext'; // Import the custom hook
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Header = ({ cartItems }) => {
  const { user } = useUser(); // Access user data

  return (
    <header id="Head">
      <div id="header-content"> {/* Main flex container */}
        <div id="logo">
          <img
            src="https://img.freepik.com/premium-vector/bakery-logo-design_260747-392.jpg"
            alt="Bakery Logo"
          />
          <h1>Radhe Bakers</h1>
        </div>
        <div id="top">
          <div id="account">
            {/* Display the user's name and profile picture if logged in */}
            {user.name ? (
              <Link to="/profile" className="profile-info">
                <img
                  src={user.profilePic || "/default-profile.jpg"}
                  alt="Profile"
                  className="profile-image"
                />
                <span>{user.name}</span>
              </Link>
            ) : (
              <Link to="/profile" className="button">
                <span className="icon">
                  <PersonOutlineOutlinedIcon />
                </span>
                <span className="text">Account</span>
              </Link>
            )}
          </div>
          <div id="cart">
            <Link to="/cart" className="button">
              <span className="icon">
                <ShoppingCartOutlinedIcon />
              </span>
              <span className="text">Cart ({cartItems.length})</span>
            </Link>
          </div>
        </div>
      </div>

      {/* New horizontal line separator */}
      <div id="separator"></div>

      {/* Separate sections for navigation links and delivery info */}
      <div id="main">
        <div id="navigation">
          <div id="Buttons">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/orders">Orders</Link> {/* Orders page link */}
          </div>
        </div>
        <div id="delivery-info">
          <Link to="/delivery"> {/* Delivery Info link */}
            <span className="icon">
              <LocalShippingOutlinedIcon />
            </span>
            <span className="text">Delivery Info</span>
          </Link>
        </div>
      </div>
      <div id="separator"></div>
    </header>
  );
};

export default Header;
