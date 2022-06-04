import React from "react";
import styles from "./GameItem.module.css";

export const GameItem = ({ game }) => {
  return (
    <div className={styles.card}>
      <div className={styles.detailes}>
        <span className={styles.title}>{game.title}</span>
        <div className={styles.genre}>{game.genres.map((genre) => genre)}</div>
        <p className={styles.description}>{game.description}</p>
        <button className={styles.buy}>Buy</button>
      </div>
    </div>
  );
};
