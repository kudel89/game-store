import React from "react";
import cx from "classnames";
import styles from "./Button.module.css";

export const Button = ({ onClick, type, children, size = "s" }) => {
  const btnClass = cx(styles.btn, {
    [styles["btn-primary"]]: type === "primary",
    [styles["btn-secondary"]]: type === "secondary",
    [styles["btn-small"]]: size === "s",
    [styles["btn-medium"]]: size === "m",
  });

  return <button className={btnClass}>{children}</button>;
};
