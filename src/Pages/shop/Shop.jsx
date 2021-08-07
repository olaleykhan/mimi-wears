import React, { Component } from "react";
import ShopCategoryPreview from "../../layouts/shop-category/ShopCategoryPreview";
import { SHOP_DATA } from "../../assets/directoryData";

export class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div>
        {collections.map(({ id, ...collection }) => {
          return <ShopCategoryPreview key={id} {...collection} />;
        })}
      </div>
    );
  }
}

export default Shop;
