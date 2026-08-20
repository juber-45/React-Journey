import React from 'react'
import { jsx } from 'react/jsx-runtime';

const App = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  

  

  return (
    <div>App</div>
  )
}

export default App