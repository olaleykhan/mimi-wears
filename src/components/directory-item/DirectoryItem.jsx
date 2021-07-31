import React from "react";
import "./DirectoryItem.scss";
import { withRouter } from "react-router";

const DirectoryItem = ({ title, imageUrl, size, history, linkUrl }) => (
  <div
    className={`${size} directory-item`}
    onClick={() => history.push(linkUrl)}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(DirectoryItem);
