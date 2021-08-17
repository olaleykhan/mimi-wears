import React from "react";

import Button from "../../components/ui/button/Button";
import "./MiniCart.scss";

const MiniCart = () => {
  return (
    <div className="mini-cart">
      <div className="cart-items">
        <Button> GO TO CHECKOUT</Button>
      </div>
    </div>
  );
};

export default MiniCart;
