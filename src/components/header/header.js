import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { CartBlock } from "../cart-block";

export const Header = () => {
  return (
    <div className="header">
      <div className="header-wrapper">
        <Link to="/" className="header-store-title">
          Game Store
        </Link>
      </div>
      <div className="header-wrapper header-cart-btn">
        <CartBlock />
      </div>
    </div>
  );
};
