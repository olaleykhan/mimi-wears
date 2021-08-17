import React from "react";
import ShopCollectionItem from "../../components/shop-collection-item/ShopCollectionItem";
import Button from "../../components/ui/button/Button";
import { Link } from "react-router-dom";
import "./ShopCategoryPreview.scss";

const shopCategoryPreview = ({ title, routeName, items }) => {
  return (
    <div className="shop-category-preview">
      <h3>{title}</h3>
      <div className="category-list">
        {items.map(
          (item, i) => i < 4 && <ShopCollectionItem key={item.id} item={item} />
        )}
      </div>
      <Link to={`/shop/${routeName}`}>
        <Button>View {title} collection</Button>
      </Link>
    </div>
  );
};

export default shopCategoryPreview;
