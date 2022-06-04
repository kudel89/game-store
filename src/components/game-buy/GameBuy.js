import React from "react";
import styles from "./GameBuy.module.css";

export const GameBuy = ({ game }) => {
  return (
    <button className={styles.button}>
      <span className={styles.price}>{game.price} грн.</span>
    </button>
  );
};
