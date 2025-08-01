import "./Item.css";

function Item(props) {
  // const itemName = this.props.name;
  const itemName = props.name;

  return (
    <div>
      <h3 className="nirma">{props.children}</h3>
      <h1 className="nirma">{itemName}</h1>
    </div>
  );
}

export default Item;
