import "./ProductItem.css";
import { useState } from "react";
import ProductDate from "./ProductDate";
import Card from "./Card";

const ProductItem = (props) => {
  const [newTitle, setNewTitle] = useState(props.title);

  const clickHandler = () => {
    setNewTitle("Popcorn");

    // console.log("Added to the cart..!");
  };
  return (
    <Card className="product-item">
      <ProductDate date={props.date} />
      <div className="product-item_description">
        <h2>{newTitle}</h2>
      </div>
      <input
        type="button"
        className="product-item_btn"
        value="Add to Cart"
        onClick={clickHandler}
      />
    </Card>
  );
};

export default ProductItem;
