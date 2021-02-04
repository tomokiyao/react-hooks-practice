import React from 'react';

const App = () => {
  const [value, setValue] = useState('');
  const handleClick = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
  };
  return <div></div>;
};
