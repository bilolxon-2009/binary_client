import React from 'react';
import style from "./Footer.module.scss"
import hugging from "../../essets/hugging.png"
import man from "../../essets/man.png"
import stars from "../../essets/stars.svg"
import messageBox from "../../essets/messageBox.svg"
import logoBlack from "../../essets/logoBlack.svg"
import { MainInput, CustomRadio, MainLink  } from '../../utils/Components';
// Please use CSS module

const Footer = () => {
  
  return (
    <div className={style.footer} id='footer'>
      <h2 className={style.text}>Начните воплощать мечту <img src={stars} alt="" />  
       в реальность <img src={man} alt="" /> вместе с нами <img src={hugging} alt="" /></h2>
       <form action="#">
         <div className={style.formNameTaker}><MainInput required type={"text"} placeholder={"Ваше имя*"} />
         <MainInput type={"email"} placeholder={"example@gmail.com"} />
         <input maxLength={9}   required className={style.numberInput} />
         <h3 className={style.numberCode}>+998</h3>
         </div>
         <div className={style.radioTaker}>
          <textarea placeholder='Ваша отрасль'></textarea>
          <div><CustomRadio id={"newProject"} name={"typeofwork"} /> <label for="newProject">Новый продукт</label></div>
          <div><CustomRadio id={"redesign"} name={"typeofwork"}/> <label for="redesign">Редизайн</label></div>
         </div>
       </form>
       <div className={style.buttonElement} ><MainLink text="Отправить" icon={messageBox} link="#"/></div>
       <div className={style.footerNavbar}>
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
       <img src={logoBlack} alt="" />
       </div>
    </div>
  )
}

export default Footer