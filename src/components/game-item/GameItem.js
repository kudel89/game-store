import React from "react";
import { GameCover } from "../game-cover/GameCover";
import { GameBuy } from "../game-buy/GameBuy";
import { GameGenre } from "./../game-genre/GameGenre";
import styles from "./GameItem.module.css";

export const GameItem = ({ game }) => {
  return (
    <div className={styles.card}>
      <div className={styles.container}>
        <GameCover image={game.image} />

        <div className={styles.detailes}>
          <div className={[styles["top-content"]]}>
            <span className={styles.title}>{game.title}</span>
            <div className={styles.genre}>
              {game.genres.map((genre) => (
                <GameGenre genre={genre} key={genre} />
              ))}
            </div>
            <p className={styles.description}>{game.description}</p>
          </div>
          <GameBuy game={game} />
        </div>
      </div>
    </div>
  );
};
