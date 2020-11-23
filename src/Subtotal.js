import React from "react";
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";
import "./Subtotal.css";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <p className="subtotal__total">
        Subtotal {basket.length} items:{" "}
        <strong>$0{getBasketTotal(basket)}</strong>{" "}
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" name="" id="" />
        <span>This order contains a gift</span>
      </small>
      <button>Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
