import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { auth } from "../../firebase/firebase.utils";
import logo from "../../assets/alaf-logo.png";

import CartIcon from "../../components/ui/cart-icon/CartIcon";
import MiniCart from "../mini-cart/MiniCart";
import "./Header.scss";
import { toggleDisplayCart } from "../../store/actions/index.actions";

const Header = ({ currentUser, displayCart, toggleCart }) => {
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

          <CartIcon onClick={toggleCart} />
          {/* <Link to="/auth">
            <li>Auth</li>
          </Link> */}
        </ul>
        {displayCart ? <MiniCart /> : ""}
      </nav>
    </>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.userReducer.currentUser,
  displayCart: state.cartReducer.displayMiniCart,
});
const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleDisplayCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
