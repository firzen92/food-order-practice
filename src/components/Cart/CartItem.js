import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  const item = {
    name: props.name,
    price: props.price,
    amount: props.amount
  };

  const remove = () => {
    props.onRemove(item);
  }

  const add = () => {
    props.onAdd(item);
  }



  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={remove}>−</button>
        <button onClick={add}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
