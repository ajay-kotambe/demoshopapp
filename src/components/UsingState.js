import { useState } from "react";

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
        <button onClick={minusClickHandler}>-</button>
        <button onClick={plusClickHandler}>+</button>
      </div>
      <div>
        <h2>{count}</h2>
      </div>
      <div>Clicked {calCount} times..!</div>
    </div>
  );
};

export default UsingState;
