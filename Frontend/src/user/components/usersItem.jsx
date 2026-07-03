import React from "react";
import "./userItem.css";

const userItem = ({ image, name, placeCount }) => {
  return (
    <li className="user-item">
      <div className="user-item_content">
        <div className="user-item_image">
          <img src={image} alt={name} />
        </div>

        <div className="user-item_info">
          <h2>{name}</h2>
          <h3>
            {placeCount} {placeCount === 1 ? "Place" : "Places"}
          </h3>
        </div>
      </div>
    </li>
  );
};

export default userItem;
