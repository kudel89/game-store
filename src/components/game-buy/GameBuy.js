import React from "react";
import { useDispatch } from "react-redux";
import { setItemInCart } from "../../redux/cart/reducer";
import { Button } from "../button/Button";
import styles from "./GameBuy.module.css";

export const GameBuy = ({ game }) => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    console.log("test");
    e.stopPropagation();
    dispatch(setItemInCart(game));
  };

  return (
    <div className={styles.container}>
      <span className={styles.price}>{game.price} грн.</span>
      <Button type="primary" onClick={handleClick}>
        В корзину
      </Button>
    </div>
  );
};
