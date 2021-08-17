import React from "react";

import { ReactComponent as Cart } from "../../../assets/cart.svg";
import "./CartIcon.scss";

const CartIcon = ({ onClick }) => {
  return (
    <div onClick={onClick} className="cart-icon">
      <Cart className="icon" />
      <span className="count"> 0</span>
    </div>
  );
};

export default CartIcon;
