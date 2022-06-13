import React from "react";
import { useDispatch } from "react-redux";
import { GameCover } from "./../game-cover/GameCover";
import { deleteItemFromCart } from "../../redux/cart/reducer";
import { AiOutlineCloseCircle } from "react-icons/ai";
import styles from "./OrderItem.module.css";

export const OrderItem = ({ game }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(deleteItemFromCart(game.id));
  };

  return (
    <div className={styles.container}>
      <div className={styles.cover}>
        <GameCover image={game.image} />
      </div>
      <div className={styles.title}>
        <span>{game.title}</span>
      </div>
      <div className={styles.price}>
        <span>{game.price} грн.</span>
        <AiOutlineCloseCircle
          size={25}
          className={styles.delete}
          onClick={handleClick}
        />
      </div>
    </div>
  );
};
