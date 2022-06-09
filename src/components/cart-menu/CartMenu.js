import React from "react";
import { calcTotalPrice } from "../../utils";
import { Button } from "./../button/Button";
import { CartItem } from "./../cart-item";
import styles from "./CartMenu.module.css";

export const CartMenu = ({ items, onClick }) => {
  return (
    <div className={styles.container}>
      <div className={[styles["game-list"]]}>
        {items.length > 0
          ? items.map((game) => (
              <CartItem
                key={game.title}
                price={game.price}
                title={game.title}
                id={game.id}
              />
            ))
          : "Корзина пуста"}
      </div>
      {items.length > 0 ? (
        <div className={[styles["game-arrange"]]}>
          <div className={[styles["total-price"]]}>
            <span>Итого: </span>
            <span>{calcTotalPrice(items)} грн.</span>
          </div>

          <Button type="primary" size="m" onClick={onClick}>
            Оформить заказ
          </Button>
        </div>
      ) : null}
    </div>
  );
};
