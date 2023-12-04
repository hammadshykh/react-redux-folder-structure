import { useDispatch, useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";

import ProductsData from "../../_data/products.json";

const ProductItem = (props) => {
  const dispatch = useDispatch();

  const onAddToCartHandler = (prdct) => {
    dispatch({
      type: "ADD_ITEM",
      payload: prdct,
    });
  };

  return (
    <li className={classes.item}>
      {ProductsData?.map(({ id, name, price }) => (
        <Card key={id}>
          <header>
            <h3>{name}</h3>
            <div className={classes.price}>
              {price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </div>
          </header>
          <div className={classes.actions}>
            <button onClick={() => onAddToCartHandler({ id, name, price })}>
              Add to Cart
            </button>
          </div>
        </Card>
      ))}
    </li>
  );
};

export default ProductItem;
