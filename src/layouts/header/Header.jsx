import React from "react";
import { Link } from "react-router-dom";

import { auth } from "../../firebase/firebase.utils";

import logo from "../../assets/alaf-logo.png";
import "./Header.scss";

const Header = ({ currentUser }) => {
  return (
    <>
      <nav className="header">
        <Link to="/" className="logo">
          <img src={logo} alt="company logo" />
        </Link>
        <ul>
          <Link to="/shop">
            <li>Shop</li>
          </Link>
          <Link to="/cart">
            <li>Cart</li>
          </Link>

          {currentUser ? (
            <li onClick={() => auth.signOut()}> Sign Out</li>
          ) : (
            <Link to="/auth">
              <li> Sign-in</li>
            </Link>
          )}
          {/* <Link to="/auth">
            <li>Auth</li>
          </Link> */}
        </ul>
      </nav>
    </>
  );
};

export default Header;