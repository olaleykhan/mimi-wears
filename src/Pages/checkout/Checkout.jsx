import React from "react";

// immport
import CheckoutMain from "../../layouts/checkout/checkout-main/CheckoutMain";
import PaymentDetails from "../../layouts/checkout/payment-details/PaymentDetails";

import { connect } from "react-redux";

import "./Checkout.scss";
import { selectCartItems } from "../../store/reducers/cart-reducer/cartSelector";
import { reducePrice } from "../../utils/cart-utils/cartUtils";

const Checkout = ({ cartItems }) => {
  const totalCost = reducePrice(cartItems, "quantity", "price");
  return (
    <div className="checkout-container">
      <h3> The checkout page reloaded. </h3>
      <div className="checkout">
        <CheckoutMain cartItems={cartItems} />
        <PaymentDetails totalCost={totalCost} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("i am being called in checkout page");
  return {
    cartItems: selectCartItems(state),
  };
};

export default connect(mapStateToProps)(Checkout);
