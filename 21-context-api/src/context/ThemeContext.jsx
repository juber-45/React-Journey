import react, { createContext } from 'react'

export const ThemeDataContext = createContext();

const ThemeContext = (props) => {

  return (
    <div>
      <ThemeDataContext.Provider value='Juber'>
        {props.children}
      </ThemeDataContext.Provider>
    </div>
  )
}

export default ThemeContext