import React from 'react'

const Navbar = (props) => {

  function changeTheme() {
    console.log(props.theme);
    props.setTheme('light');
  }

  return (
    <div>
      <h2> Theme is {props.theme} </h2>
      <button onClick={changeTheme}>Change Theme</button>
    </div>
  )
}

export default Navbar