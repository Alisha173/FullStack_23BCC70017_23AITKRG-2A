import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [error, setError] = useState('');

  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
      setError('');
    } else {
      setError('maximum limit reached');
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
      setError('');
    }
  };

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span style={{ margin: '0 10px' }}>{count}</span>
      <button onClick={increment}>+</button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
};

export default Counter;
