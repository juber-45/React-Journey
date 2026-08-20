import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const aChanging = () => {
    console.log('A ki value change ho gai');
  }

  const bChanging = () => {
    console.log('B ki value change ho gai');
  }

  useEffect(function() {
    bChanging();
  }, [a])

  return (
    <div>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>
      <button
        onClick={() => {
          setA(a + 1);
        }}>
        Change A
      </button>

      <button 
      onClick={() => {
        setB(b-1)
      }}>
        Change B
      </button>
    </div>
  )
}

export default App