import React from "react";
import { useSelector } from "react-redux";
import { OrderItem } from "./../../components/order-item/OrderItem";
import { calcTotalPrice } from "./../../utils";
import styles from "./OrderPage.module.css";

export const OrderPage = () => {
  const items = useSelector((state) => state.cart.itemsInCart);

  if (items.length === 0) {
    return <h1>Ваша корзина пуста</h1>;
  }

  return (
    <div className={styles.container}>
      <div className={[styles["section-left"]]}>
        {items.map((game) => (
          <OrderItem game={game} key={game.title} />
        ))}
      </div>
      <div className={[styles["section-right"]]}>
        <div className={styles.price}>
          <span>
            {items.length} товаров на сумму {calcTotalPrice(items)} грн.
          </span>
        </div>
      </div>
    </div>
  );
};
