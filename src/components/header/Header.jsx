import React, { useState } from 'react';
import styles from "./Header.module.scss";
import logo from "../../assets/logo.svg"
// Please use CSS module

const Header = () => {
  const [scrollState, setScrollState] = useState(0)

  const ScrollFunc = () => {
    setScrollState(window.scrollY)
  }

  window.addEventListener("scroll", ScrollFunc)
  return (
    <div className={`${styles.header} `} >
      <div className={styles.logo}>
        <img src={logo} alt="" />
        <h1>BINARY</h1>
      </div>

      <ul>
        <li>
          <a href="#">
            О нас
          </a>
        </li>
        <li>
          <a href="#">
            Кейсы
          </a>
        </li>
        <li>
          <a href="#">
            Услуги
          </a>
        </li>
        <li>
          <a href="#">
            Контакты
          </a>
        </li>

      </ul>
    </div>
  )
}

export default Header