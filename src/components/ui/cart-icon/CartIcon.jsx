import React from "react";
import { connect } from "react-redux";

import { selectCartItemsCount } from "../../../store/reducers/cart-reducer/cartSelector";
import { toggleDisplayCart } from "../../../store/actions/index.actions";

import { ReactComponent as Cart } from "../../../assets/cart.svg";
import "./CartIcon.scss";

const CartIcon = ({ toggleCart, cartCount }) => {
  return (
    <div onClick={toggleCart} className="cart-icon">
      <Cart className="icon" />
      <span className="count"> {cartCount}</span>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartCount: selectCartItemsCount(state),
});
const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleDisplayCart()),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
