// import React from 'react'

import { useState } from "react"

const App = () => {
  const [num, setNum] = useState(10);

  const btnClicked = () => {
    setNum(prev => (prev + 1));
    setNum(prev => (prev + 1));
    setNum(prev => (prev + 1));
    setNum(prev => (prev + 1));
  }

  return (
    <div className="parent">
      <div className="num">
        <span>{num}</span>
      </div>
      <div className="btn">
        <button onClick={btnClicked}>Click</button>
      </div>
    </div>
  )
}

export default App