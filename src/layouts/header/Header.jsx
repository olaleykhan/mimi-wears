import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { auth } from "../../firebase/firebase.utils";
import logo from "../../assets/alaf-logo.png";

import CartIcon from "../../components/ui/cart-icon/CartIcon";
import MiniCart from "../mini-cart/MiniCart";
import "./Header.scss";
import { toggleDisplayCart } from "../../store/actions/index.actions";

// const itemCumulative = (arr, digit) => {
//   // this function assumes that the first argument is an array that contains objects.
//   // second agument is the property of the  object in the array to be accumulated / summed up
//   return arr.reduce((acc, arrItem) => acc + arrItem[digit], 0);
// };

const Header = ({ currentUser, displayCart, toggleCart, cartCount }) => {
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

          <CartIcon cartCount={cartCount} onClick={toggleCart} />

          {/* <Link to="/auth">
            <li>Auth</li>
          </Link> */}
        </ul>
        {displayCart ? <MiniCart /> : null}
      </nav>
    </>
  );
};

const mapStateToProps = ({ userReducer, cartReducer }) => {
  console.log("i am being called");
  return {
    currentUser: userReducer.currentUser,
    displayCart: cartReducer.displayMiniCart,
  };
};
const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleDisplayCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
