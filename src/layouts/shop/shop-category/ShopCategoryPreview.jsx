import React from "react";
import ShopCollectionItem from "../../../components/shop-collection-item/ShopCollectionItem";
import Button from "../../../components/ui/button/Button";
import { withRouter } from "react-router-dom";
import "./ShopCategoryPreview.scss";

const shopCategoryPreview = ({ title, routeName, items, history }) => {
  return (
    <div className="shop-category-preview">
      <h3>{title}</h3>
      <div className="category-list">
        {items.map(
          (item, i) => i < 4 && <ShopCollectionItem key={item.id} item={item} />
        )}
      </div>
      <Button onClick={() => history.push(`shop/${routeName}`)}>View {title} collection</Button>
      {/* <Button onClick={() => history.push(routeName)}>View {title} collection</Button> */}
    </div>
  );
};

export default withRouter(shopCategoryPreview);
