import React from "react";
import FlatDisplayCard from "../../../components/flat-display-card/FlatDisplayCard";

import "./CheckoutMain.scss";

const CheckoutMain = ({ cartItems }) => {
  return (
    <div className="checkout-main">
      {cartItems.map((item) => (
        <FlatDisplayCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CheckoutMain;
