import React from 'react'
import styles from './Header.module.css';
import { useSelector } from 'react-redux';
const Header = () => {
  const isDarkMode = useSelector(state=>state.AppReducer.isDarkMode)

  return (
  
    <div className={`${styles.Head} ${isDarkMode ? styles.darkmode: ""}`}>
      <p>Telegram Replica</p>
    </div>
  )
}

export default Header
