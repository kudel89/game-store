import React from "react";
import styles from "./Button.module.css";

export const Button = ({ onClick, type, children, size = "s" }) => {
  return <button className={styles.button}>{children}</button>;
};
