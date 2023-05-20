import React from 'react';
import styles from "./Header.module.scss";
import logo from "../../assets/logo.svg"
import { Link } from 'react-router-dom';
// Please use CSS module
import bars from "../../assets/bars_icon.svg"
const Header = () => {


  return (
    <div className={`${styles.header} `} >
      <button>
        <img src={bars} alt="" />
      </button>
      <a href='/' className={styles.logo}>
        <img src={logo} alt="" />
        <h1>BINARY</h1>
      </a>

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
          <Link to={"contact"}>
            Контакты
          </Link>
        </li>

      </ul>
    </div>
  )
}

export default Header