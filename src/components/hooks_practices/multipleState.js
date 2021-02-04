import { useState } from 'react';

const MultipleState = (props) => {
  const [name, setName] = useState(props.name);
  const [price, setPrice] = useState(props.price);

  const incrimentPrice = () => {
    setPrice(price + 1);
  };
  const decrimentPrice = () => {
    setPrice(price - 1);
  };
  const reset = () => {
    setPrice(props.price);
    setName(props.name);
  };
  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <p>
        現在の{name}は、{price}円です。
      </p>
      <div>
        <button onClick={incrimentPrice}>+1</button>
        <button onClick={decrimentPrice}>-1</button>
      </div>
      <br />
      <div>
        <input value={name} onChange={handleChangeName} />
      </div>
      <br />
      <div>
        <button onClick={reset}>reset</button>
      </div>
    </>
  );
};

App.defaultProps = {
  name: '',
  price: 1000,
};

export default MultipleState;
