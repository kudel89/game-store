import React from "react";
import styles from "./GameCover.module.css";

export const GameCover = ({ image = "" }) => {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${image})` }}
    />
  );
};
