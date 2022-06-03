import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { CartBlock } from "../CartBlock";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.title}>
          Game Store
        </Link>
      </div>
      <div className={styles.button}>
        <CartBlock />
      </div>
    </div>
  );
};
