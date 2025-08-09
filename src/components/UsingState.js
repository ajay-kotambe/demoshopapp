import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const UsingState = () => {
  const [count, setCount] = useState(0);
  const [calCount, setCalCount] = useState(0);

  const minusClickHandler = () => {
    setCount(count - 1);
    setCalCount(calCount + 1);
  };
  const plusClickHandler = () => {
    setCount(count + 1);
    setCalCount(calCount + 1);
  };

  return (
    <div>
      <div>
        <button onClick={minusClickHandler}>
          <FaMinus />
        </button>
        <button onClick={plusClickHandler}>
          <FaPlus />
        </button>
      </div>
      <div>
        <h2>{count}</h2>
      </div>
      <div>Clicked {calCount} times..!</div>
    </div>
  );
};

export default UsingState;
