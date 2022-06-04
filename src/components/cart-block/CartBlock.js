import React from "react";
import { BiCartAlt } from "react-icons/bi";
import styles from "./CartBlock.module.css";

export const CartBlock = () => {
  return (
    <div className={styles.container}>
      <BiCartAlt size={25} className={styles.icon} />
      <span className={styles.price}>999 грн.</span>
    </div>
  );
};
