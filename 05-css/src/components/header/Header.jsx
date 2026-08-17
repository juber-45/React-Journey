import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <h2>Juber</h2>
      <button className={styles.btn}>Later</button>
    </div>
  )
}

export default Header