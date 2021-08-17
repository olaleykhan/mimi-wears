import React from "react";
import { connect } from "react-redux";

import { addItemToCart } from "../../store/actions/index.actions";

import Button from "../ui/button/Button";
import "./ShopCollectionItem.scss";

const ShopCollectionItem = ({ item, addItemToCart }) => {
  // console.log(item);
  const { imageUrl, name, price } = item;

  return (
    <div className="shop-collection-item">
      <img src={imageUrl} alt={name} />
      <div className="details">
        <p>{name}</p>
        <p>${price}</p>
      </div>

      <div className="add-to-cart-btn">
        <Button behaviour="dark" onClick={() => addItemToCart(item)}>
          ADD TO CART
        </Button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (value) => dispatch(addItemToCart(value)),
});

export default connect(null, mapDispatchToProps)(ShopCollectionItem);
