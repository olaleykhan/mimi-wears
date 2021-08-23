import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { toggleDisplayCart } from "../../store/actions/index.actions";
import { selectCartItems } from "../../store/reducers/cart-reducer/cartSelector";
import Button from "../../components/ui/button/Button";
import MiniCartItem from "../../components/cart/mini-cart-item/MiniCartItem";
import "./MiniCart.scss";

const MiniCart = ({ cartItems, history, closeCart }) => {
  console.log(toggleDisplayCart);
  console.log(closeCart);
  return (
    <div className="mini-cart">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <MiniCartItem key={item.id} {...item} />)
        ) : (
          <span className="empty-cart"> Your cart is empty</span>
        )}
        {cartItems.length ? (
          <Button
            onClick={() => {
              history.push("/checkout");
              closeCart();
              // dispatch(toggleDisplayCart);
            }}
            style={{ borderRadius: "0px", border: "none" }}
          >
            GO TO CHECKOUT
          </Button>
        ) : null}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

const mapDispatchToProps = (dispatch) => ({
  closeCart: () => dispatch(toggleDisplayCart()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MiniCart)
);
