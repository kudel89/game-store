import React from "react";
import styles from "./GameGenre.module.css";

export const GameGenre = ({ genre }) => {
  return <div className={[styles["game-genre"]]}>{genre}</div>;
};
