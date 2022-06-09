import React, { useState } from "react";
import { BiCartAlt } from "react-icons/bi";
import { useSelector } from "react-redux";
import { CartMenu } from "../cart-menu";
import { ItemsInCart } from "../items-in-cart/ItemsInCart";
import { calcTotalPrice } from "../../utils";
import styles from "./CartBlock.module.css";

export const CartBlock = () => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = calcTotalPrice(items);

  return (
    <div className={styles.container}>
      <ItemsInCart quantity={items.length} />
      <BiCartAlt
        size={25}
        className={styles.icon}
        onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
      />
      {totalPrice > 0 && (
        <span className={styles.price}>{totalPrice} грн.</span>
      )}
      {isCartMenuVisible && <CartMenu items={items} onClick={() => null} />}
    </div>
  );
};
