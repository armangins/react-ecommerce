import React from "react";
import { withRouter } from "react-router";
import "./menu-item.styles.scss";

const MenuItem = ({ title, imgName, size, history, linkURL, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkURL}`)}
  >
    <div
      style={{ backgroundImage: `url(${imgName})` }}
      className="background-image"
    ></div>
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span>buy now</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
