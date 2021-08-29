import React from "react";
import "./PaymentDetails.scss";

const PaymentDetails = ({ totalCost }) => {
  return <div className="payment-details">total cost is {totalCost}</div>;
};

export default PaymentDetails;
