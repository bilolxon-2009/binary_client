import React from 'react';
import style from "./Footer.module.scss"
import ScrollRoute from '../../utils/scrollroute/Scrollroute';
// Please use CSS module

const Footer = () => {
  return (
    <div className={style.footer} id='footer'>
      <h1>Footer</h1>
      <ScrollRoute routeName={"footer"} />
    </div>
  )
}

export default Footer