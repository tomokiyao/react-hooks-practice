import { useState } from 'react';

const ImplementObject = (props) => {
  const [state, setState] = useState(props);
  const { name, price } = state;

  const incrimentPrice = () => {
    setState({ ...state, price: price + 1 });
  };
  const decrimentPrice = () => {
    setState({ ...state, price: price - 1 });
  };
  const reset = () => setState(props);
  const handleChangeName = (e) => {
    setState({ ...state, name: e.target.value });
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

export default ImplementObject;
