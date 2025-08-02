import "./NewProduct.css";
import ProductForm from "./ProductForm";

const NewProduct = (props) => {
  const getDataFromProductForm = (data) => {
    props.sendDataToApp(data);
  };
  return (
    <div>
      <ProductForm className="new-product" sendData={getDataFromProductForm} />
    </div>
  );
};

export default NewProduct;
