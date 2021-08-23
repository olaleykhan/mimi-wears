import React from "react";
import { connect } from "react-redux";
import { selectCartItemsCount } from "../../../store/reducers/cart-reducer/cartSelector";

import { ReactComponent as Cart } from "../../../assets/cart.svg";
import "./CartIcon.scss";

const CartIcon = ({ onClick, cartCount }) => {
  return (
    <div onClick={onClick} className="cart-icon">
      <Cart className="icon" />
      <span className="count"> {cartCount}</span>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartCount: selectCartItemsCount(state),
});
export default connect(mapStateToProps)(CartIcon);
