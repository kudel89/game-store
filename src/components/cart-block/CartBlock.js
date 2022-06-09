import React from "react";
import { BiCartAlt } from "react-icons/bi";
import { useSelector } from "react-redux";
import { CartMenu } from "../cart-menu";
import { calcTotalPrice } from "../../utils";
import styles from "./CartBlock.module.css";

export const CartBlock = () => {
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = calcTotalPrice(items);
  return (
    <div className={styles.container}>
      <BiCartAlt size={25} className={styles.icon} />
      <span className={styles.price}>{totalPrice} грн.</span>
      <CartMenu items={items} onClick={() => null} />
    </div>
  );
};
