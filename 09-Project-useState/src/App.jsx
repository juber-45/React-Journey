import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0);

  const increaseNum = () => {
    setNum(num + 1);
  };

  const decreaseNum = () => {
    setNum(num - 1);
  };

  const plusNumBy5 = () => {
    setNum(num + 5);
  };

  const minusNumBy5 = () => {
    setNum(num - 5);
  };

  const numToZero = () => {
    setNum(0);
  }

  return (
    <>
      <h1>Number Counter</h1>
      <div className='parent'>
        <h1>{num}</h1>
        <div className="btn">
          <button onClick={increaseNum}>Increase +</button>
          <button onClick={decreaseNum}>Decrease -</button>
          <button onClick={plusNumBy5}>Plus + 5</button>
          <button onClick={minusNumBy5}>Minus - 5</button>
          <button onClick={numToZero}>0</button>
        </div>
      </div>
    </>
  )
}

export default App