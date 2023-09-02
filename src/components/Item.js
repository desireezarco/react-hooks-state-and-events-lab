import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setIsInCart] = useState(false)
  const itemClass = inCart ? "in-cart" : ""
  const btnContent = inCart ? "Remove From Cart" : "Add to Cart"

  function handleAddItem() {
    setIsInCart(!inCart)
  }
  
  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddItem}>{btnContent}</button>
    </li>
  );
}

export default Item;
