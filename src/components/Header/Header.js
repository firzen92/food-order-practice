import styles from "./Header.module.css";
import meals from "../../assets/meals.jpg";
import React, { useState, useContext } from "react";

import HeaderCartButton from "./HeaderCartButton";
import CartItem from "../Cart/CartItem";
import Modal from "../UI/Modal";

import MealContext from "../context/meal-context";

const Header = (props) => {
  const ctx = useContext(MealContext);

  const [showCartModal, setShowCartModal] = useState(false);

  const displayCart = () => {
    setShowCartModal(true);
  };

  const hideCart = () => {
    setShowCartModal(false);
  };

  const removeAmount = (item) => {
    item.amount--;
    ctx.updateCart(item);
  }

  const addAmount = (item) => {
    item.amount++;
    ctx.updateCart(item);
  }

  return (
    <React.Fragment>
      {showCartModal && (
        <Modal hide={hideCart}>
          {ctx.addedToCart.map((item) => (
            <CartItem
              key={item.name}
              name={item.name}
              price={item.price}
              amount={item.amount}
              onRemove={removeAmount}
              onAdd={addAmount}
            />
          ))}
        </Modal>
      )}
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton displayCart={displayCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={meals} />
      </div>
    </React.Fragment>
  );
};

export default Header;
