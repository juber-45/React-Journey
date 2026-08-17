import React from 'react'

const App = () => {
  function inputValue(val) {
    console.log(val)
  }

  return (
    <div>
      <input onChange={function(elem) {
      inputValue(elem.target.value);
      }} type="text" placeholder='Enter your Name' />
    </div>
  )
}

export default App