import React from "react";
import { Button } from "../button/Button";
import styles from "./GameBuy.module.css";

export const GameBuy = ({ game }) => {
  return (
    <div className={styles.container}>
      <span className={styles.price}>{game.price} грн.</span>
      <Button type="primary" onClick={() => null}>
        В корзину
      </Button>
    </div>
  );
};
