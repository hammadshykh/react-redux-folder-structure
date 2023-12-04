import { useDispatch } from "react-redux";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const { id, name, price } = props.item;

  const removeCartItemHandler = (id) =>
    dispatch({ type: "REMOVE_ITEM", payload: id });

  return (
    <li className={classes.item}>
      <button onClick={() => removeCartItemHandler(id)}>x</button>
      <header>
        <h3>{name}</h3>
        <div className={classes.price}>
          {price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </div>
      </header>
    </li>
  );
};

export default CartItem;
