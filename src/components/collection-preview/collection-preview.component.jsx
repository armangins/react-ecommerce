import React from "react";
import CollectionItem from "./collection-item/collection-item.component";
import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title}</h1>
    <div className="preview">
      {/* filter 4 items everytime */}
      {items
        .filter((items, index) => index < 4)
        .map((item) => {
          return <CollectionItem key={item.id} item={item} />;
        })}
    </div>
  </div>
);

export default CollectionPreview;
