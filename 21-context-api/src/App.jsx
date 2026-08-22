import React from 'react'
import Navbar from './components/Navbar'
import { useState } from 'react'

const App = () => {

  const [theme, setTheme] = useState('light')

  return (
    <div>
      <Navbar theme={theme}>
        <h3>This is Navbar</h3>
        <h3>This is Navbar</h3>
      </Navbar>
    </div>
  )
}

export default App