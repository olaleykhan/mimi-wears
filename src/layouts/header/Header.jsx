import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";
import logo from "../../assets/alaf-logo.png";

import CartIcon from "../../components/ui/cart-icon/CartIcon";
import MiniCart from "../mini-cart/MiniCart";
import "./Header.scss";

import { selectCartHidden } from "../../store/reducers/cart-reducer/cartSelector";
import { selectCurrentUser } from "../../store/reducers/user-reducer/userSelector";

const Header = ({ currentUser, displayCart, cartCount }) => {
  // console.log(toggleDisplayCart);
  // console.log(toggleCart);
  // console.log(displayCart, "discrt", toggleCart, "tgcrt");
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

          <CartIcon cartCount={cartCount} />

          {/* <Link to="/auth">
            <li>Auth</li>
          </Link> */}
        </ul>
        {displayCart ? <MiniCart /> : null}
      </nav>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  displayCart: selectCartHidden,
});
//   (state) => {
//   console.log("i am being called");
//   return {

//   };
// };

export default connect(mapStateToProps)(Header);
