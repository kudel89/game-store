import React from "react";
import { GameCover } from "./../game-cover/GameCover";
import styles from "./OrderItem.module.css";

export const OrderItem = ({ game }) => {
  return (
    <div className={styles.container}>
      <div className={styles.cover}>
        <GameCover image={game.image} />
      </div>
      <div className={styles.title}>{game.title}</div>
      <div className={styles.price}>{game.price} грн.</div>
    </div>
  );
};
