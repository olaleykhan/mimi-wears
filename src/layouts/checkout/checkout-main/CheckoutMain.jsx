import React from "react";
import { Link } from "react-router-dom";

import FlatDisplayCard from "../../../components/flat-display-card/FlatDisplayCard";

import "./CheckoutMain.scss";

const CheckoutMain = ({ cartItems }) => {
  return (
    <div className="checkout-main">
      {cartItems.length ? (
        cartItems.map((item) => <FlatDisplayCard key={item.id} item={item} />)
      ) : (
        <p>
          You have no items in cart. please visit <Link to="/shop">Shop</Link>
        </p>
      )}
    </div>
  );
};

export default CheckoutMain;
