import React from "react";
import styles from "./CartItem.module.css";

export const CartItem = ({ title, price, id }) => {
  return (
    <div className={styles.container}>
      <span>{title}</span>
      <div className={styles.price}>
        <span>{price} грн.</span>
      </div>
    </div>
  );
};
