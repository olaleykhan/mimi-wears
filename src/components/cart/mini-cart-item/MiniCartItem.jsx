import React from "react";
import "./MiniCartItem.scss";

const CartItem = ({ name, price, imageUrl, quantity }) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt=" name" />
      <div className="content">
        <h4> {name}</h4>
        <p>
          <span> ${price}</span> <span> {quantity} unit(s)</span>
        </p>
      </div>
    </div>
  );
};

export default CartItem;
