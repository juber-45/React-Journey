import React from 'react'
import { useState } from 'react';

const App = () => {
  const [title, setTitle] = useState('');

  const formHandler = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  }

  return (
    <div>
      <form onSubmit={(e) => {
        formHandler(e);
      }}>

        <input
          onChange={(e) => {
            setTitle(e.target.value)
          }}
          value={title}
          type="text"
          placeholder='Enter your name'
        />

        <button>Submit</button>
      </form>
    </div>
  )
}

export default App