import React from 'react';
import styles from "./Header.module.scss";
import logo from "../../assets/logo.svg"
import { Link } from 'react-router-dom';
// Please use CSS module
import bars from "../../assets/bars_icon.svg"
import Language from '../../utils/language/Language';
import { useTranslation } from 'react-i18next';

const Header = () => {

  const { t } = useTranslation();

  return (
    <div className={`${styles.header} `} >
      <button>
        <img src={bars} alt="" />
      </button>
      <a href='/' className={styles.logo}>
        <img src={logo} alt="" />
        <h1>BINARY</h1>

      </a>

      <ul><div className={styles.header_language}>
        <Language />
      </div>

        <li>
          <Link to={"/"}>
            {t("aboutus")}
          </Link>
        </li>
        <li>
          <Link to={"case"}>
            {t("case")}
          </Link>
        </li>
        <li>
          <Link to={"service"}>
            {t("service")}
          </Link>
        </li>
        <li>
          <Link to={"contact"}>
            {t("contact")}
          </Link>
        </li>


      </ul>

    </div>
  )
}

export default Header