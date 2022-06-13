import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { BiCartAlt } from "react-icons/bi";
import { CartMenu } from "../cart-menu";
import { ItemsInCart } from "../items-in-cart/ItemsInCart";
import { calcTotalPrice } from "../../utils";
import styles from "./CartBlock.module.css";

export const CartBlock = () => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = calcTotalPrice(items);
  const navigate = useNavigate();
  const handleClick = useCallback(() => {
    setIsCartMenuVisible(false);
    navigate("/order");
  }, [navigate]);

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
      {isCartMenuVisible && <CartMenu items={items} onClick={handleClick} />}
    </div>
  );
};
