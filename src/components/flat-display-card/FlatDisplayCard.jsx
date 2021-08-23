import React from "react";
import "./FlatDisplayCard.scss";
import { connect } from "react-redux";
import { addItemToCart } from "../../store/actions/index.actions";

function FlatDisplayCard({ item, increaseItem }) {
  const { imageUrl, name, price, quantity } = item;
  console.log(price, "naira and quantity is ", quantity);
  return (
    <div className="flat-display-card">
      {/* <div> */}
      <img src={imageUrl} alt="" />
      {/* </div> */}
      <div className="details">
        <div className="name">
          <p>{name}</p>
          <p> description description description </p>
        </div>

        <div className="options">
          <div className="quantity">
            <span className="reduce">{"<  "}</span>
            <span className="count"> {quantity} </span>
            <span onClick={() => increaseItem(item)} className="increase">
              {" >"}
            </span>
          </div>

          <div className="cost"> $ {price * quantity}</div>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  increaseItem: (value) => dispatch(addItemToCart(value)),
});

export default connect(null, mapDispatchToProps)(FlatDisplayCard);
