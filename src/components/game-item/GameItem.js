import React from "react";
import { GameCover } from "../game-cover/GameCover";
import { GameBuy } from "../game-buy/GameBuy";
import styles from "./GameItem.module.css";

export const GameItem = ({ game }) => {
  return (
    <div className={styles.card}>
      <GameCover image={game.image} />

      <div className={styles.detailes}>
        <span className={styles.title}>{game.title}</span>
        <div className={styles.genre}>{game.genres.map((genre) => genre)}</div>
        <p className={styles.description}>{game.description}</p>
        <div className={styles.buy}>
          <GameBuy />
        </div>
      </div>
    </div>
  );
};
