import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const anotherIncrement = () => {
    setCount((previousCount) => previousCount + 1);
  };
  const anotherDecrement = () => {
    setCount((previousCount) => previousCount - 1);
  };
  const resetCount = () => {
    setCount(0);
  };
  const doubleCount = () => {
    setCount(count * 2);
  };
  const divide3 = () => {
    setCount((previousCount) => (previousCount % 3 === 0 ? previousCount / 3 : previousCount));
  };

  return (
    <>
      <div>count: {count}</div>
      <div>
        <button onClick={increment}>+１</button>
        <button onClick={decrement}>-１</button>
      </div>
      <div>
        <button onClick={anotherIncrement}>+１</button>
        <button onClick={anotherDecrement}>-１</button>
      </div>
      <div>
        <button onClick={doubleCount}>x2</button>
      </div>
      <div>
        <button onClick={divide3}>３の倍数の時だけ３で割る</button>
      </div>
      <div>
        <button onClick={resetCount}>reset</button>
      </div>
    </>
  );
};

export default Counter;
