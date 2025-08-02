import { useState } from "react";
import "./ProductForm.css";

const ProductForm = () => {
  //   const [fullProductInput, setFullProductInput] = useState({
  //     title: "",
  //     date: "",
  //   });

  //   const changeTitleHandler = (event, prevState) => {
  //     console.log(event.target.value)
  //     // console.log(event.target.value)
  //     const obj = {
  //       title: event.target.value,
  //       date: event.target.value,
  //     };
  //     setFullProductInput(obj);
  //   };

  const [newTitle, setTitle] = useState("");
  const [newDate, setDate] = useState("");

  const changeTitleHandler = (event) => {
    setTitle(event.target.value);
  };

  const changeDateHandler = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const objData = {
      title: newTitle,
      date: newDate,
    };
    console.log(objData);
    setTitle("");
    setDate("");
  };
  return (
    <form className="product-form" onSubmit={submitHandler}>
      <div className="product-form-title product-form-inputs">
        <label htmlFor="forTitle">Title:</label>
        <input
          value={newTitle}
          type="text"
          id="forTitle"
          onChange={changeTitleHandler}
          placeholder="Enter Title Here..."
        />
      </div>
      <div className="product-form-date">
        <label htmlFor="forDate">Date:</label>
        <input
          value={newDate}
          id="forDate"
          type="date"
          min="2010-01-01"
          max="2025-08-02"
          onChange={changeDateHandler}
        />
      </div>
      <div className="product-form-btn">
        <button>Add Product</button>
      </div>
    </form>
  );
};

export default ProductForm;
