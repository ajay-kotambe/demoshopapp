import { useState } from "react";
import "./ProductForm.css";

const ProductForm = (props) => {
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
  // ! useState here...
  const [newTitle, setTitle] = useState("");
  const [newDate, setDate] = useState("");
  const [newId, setId] = useState("");
  const [newAmount, setAmount] = useState("");

  //   ! handlers here...

  const changeTitleHandler = (event) => {
    setTitle(event.target.value);
  };
  const changeIDHandler = (event) => {
    setId(event.target.value);
  };

  const changeDateHandler = (event) => {
    setDate(event.target.value);
  };
  const changeAmountHandler = (event) => {
    setAmount(event.target.value);
  };

  //   ! submit handler here...

  const submitHandler = (event) => {
    event.preventDefault();

    const objData = {
      id: newId,
      title: newTitle,
      amount: newAmount,
      date: newDate,
    };
    props.sendData(objData);
    // console.log(objData);
    setTitle("");
    setDate("");
    setId("");
    setAmount("");
  };
  return (
    <form className="product-form" onSubmit={submitHandler}>
      <div className="product-form-title product-form-inputs">
        <label htmlFor="forId">ID:</label> <br />
        <input
          value={newId}
          type="text"
          id="forId"
          onChange={changeIDHandler}
          placeholder="Enter Id Here..."
        />
      </div>
      <div className="product-form-title product-form-inputs">
        <label htmlFor="forTitle">Title:</label> <br />
        <input
          value={newTitle}
          type="text"
          id="forTitle"
          onChange={changeTitleHandler}
          placeholder="Enter Title Here..."
        />
      </div>
      <div className="product-form-title product-form-inputs">
        <label htmlFor="forAmount">Amount:</label> <br />
        <input
          value={newAmount}
          type="text"
          id="forAmount"
          onChange={changeAmountHandler}
          placeholder="Enter Title Here..."
        />
      </div>
      <div className="product-form-date">
        <label htmlFor="forDate">Date:</label>
        <br />
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
