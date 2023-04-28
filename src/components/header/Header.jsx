import React from 'react';
import styles from "./Header.module.scss";
import logo from "../../essets/logo.svg"
// Please use CSS module

const Header = () => {
  return (
    <div className={styles.header}>
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