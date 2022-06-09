import React from "react";
import styles from "./ItemsInCart.module.css";

export const ItemsInCart = ({ quantity = 0 }) => {
  return quantity > 0 ? (
    <div className={styles.container}>{quantity}</div>
  ) : null;
};
