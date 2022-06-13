import React from "react";
import { useSelector } from "react-redux";
import { GameCover } from "../../components/game-cover/GameCover";
import { GameGenre } from "../../components/game-genre/GameGenre";
import { GameBuy } from "./../../components/game-buy/GameBuy";
import styles from "./GamePage.module.css";

export const GamePage = () => {
  const game = useSelector((state) => state.games.currentGame);

  if (!game) return null;

  return (
    <div className={styles.container}>
      <h1>{game.title}</h1>
      <div className={styles.content}>
        <div className={styles.video}>
          <iframe
            width="90%"
            height="400px"
            src={game.video}
            title="YouTube Video Player"
            frameBorder="0"
          ></iframe>
        </div>
        <div className={styles.description}>
          <GameCover image={game.image} />
          <p>{game.description}</p>
          <p className={[styles["secondary-text"]]}>
            Популярные метки этого продукта:
          </p>
          {game.genres.map((genre) => (
            <GameGenre genre={genre} key={genre} />
          ))}
          <div className={[styles["buy-game"]]}>
            <GameBuy game={game} />
          </div>
        </div>
      </div>
    </div>
  );
};
