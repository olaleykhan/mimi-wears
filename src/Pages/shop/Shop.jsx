import React from "react";
import { Route } from "react-router";

import ShopWrapper from "../../layouts/shop/shop-wrapper/ShopWrapper";
import ShopCollection from "../../layouts/shop/shop-collection/ShopCollection";

const Shop = ({ match }) => {
  return (
    <div>

      <Route exact path={match.path} component={ShopWrapper} />
      <Route exact path={`${match.path}/:name`} component={ShopCollection} />

    </div>
  );

}

// const mapStateToProps = createStructuredSelector({
//   collections: selectShopData,
// })

export default Shop;
