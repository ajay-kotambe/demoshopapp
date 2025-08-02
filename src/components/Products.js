import "./Products.css";
import ProductItem from "./ProductItem";

function Products(props) {
  return (
    <div className="products">
      <ProductItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ProductItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ProductItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      {/* <ProductItem
        title={props.newItems[0].title}
        amount={props.newItems[0].amount}
        date={props.newItems[0].date}
      /> */}
    </div>
  );
}

export default Products;
