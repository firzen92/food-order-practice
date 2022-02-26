import React from "react";

import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const item ={
    name: props.name,
    description: props.description,
    price: props.price
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{props.price}</div>
      </div>
      <MealItemForm item={item}/>
    </li>
  );
};

export default MealItem;
