import React from 'react';
import styles from "./Header.module.scss";
import logo from "../../assets/logo.svg"
import { Link } from 'react-router-dom';
// Please use CSS module

const Header = () => {


  return (
    <div className={`${styles.header} `} >
      <div className={styles.logo}>
        <img src={logo} alt="" />
        <h1>BINARY</h1>
      </div>

      <ul>
        <li>
          <Link to={"/"}>
            О нас
          </Link>
        </li>
        <li>
          <Link to={"case"}>
            Кейсы
          </Link>
        </li>
        <li>
          <Link to={"service"}>
            Услуги
          </Link>
        </li>
        <li>
          <Link to={"#"}>
            Контакты
          </Link>
        </li>

      </ul>
    </div>
  )
}

export default Header