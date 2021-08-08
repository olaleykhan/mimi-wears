import React from "react";
import ShopCollectionItem from "../../components/shop-collection-item/ShopCollectionItem";
import { Link } from "react-router-dom";
import "./ShopCategoryPreview.scss";

const shopCategoryPreview = ({ title, routeName, items }) => {
  return (
    <div className="shop-category-preview">
      <h3>{title}</h3>
      <div className="category-list">
        {items.map(
          (item, i) => i < 4 && <ShopCollectionItem key={item.id} {...item} />
        )}
      </div>
      <Link to={`/shop/${routeName}`}>
        <button>open collection</button>
      </Link>
    </div>
  );
};

export default shopCategoryPreview;
