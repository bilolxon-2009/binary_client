import React from 'react';
import style from "./Footer.module.scss";
import office from "../../essets/🏢.webp";
// Please use CSS module

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.footer__container}>
        <h1>Мы расположены <img src={office} alt="" /></h1>
        <div className={style.branches}>
          <div className={style.branches__name}>
            <ul>
              <li>
                <h2>Офис</h2>
                <p>Uzbekistan, Tashkent, Gulabad 13</p>
              </li>
              <li>
                <h2>Телефон</h2>
                <p>+998 99 978-75-25</p>
              </li>
              <li>
                <h2>Соц. Сети</h2>
                <p>Facebook Telegram
                  <br />
                  Instagram LinkedIn</p>
              </li>
            </ul>
          </div>
          <div className={style.branches__location}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.0083286400622!2d69.2871754105118!3d41.35217269642482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8cacae23bd15%3A0x507f55c1eeefc123!2sLady%20D!5e0!3m2!1sru!2s!4v1682741009826!5m2!1sru!2s"
              width="591"
              height="353"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title='binary'></iframe>
          </div>
        </div>
      </div>

      <div className={style.footer__container_2}>
        <div className={style.footer__c2_left}>
          <div className={style.footer__c2_left_in}>
            <span>0101101011010101101</span>
            <br />
            <span style={{"opacity": '55%'}}>110010101010101</span>
            <br />
            <span style={{"opacity": '40%'}}>01100101011011001101101010</span>
            <br />
            <span style={{"opacity": '55%'}}>1100101010101</span>
            <br />
            <span>01100101011010101001101</span>
            <br />
            <span style={{"opacity": '40%'}}>110010011001010110</span>
            <br />
            <span>11001011001101010101</span>
            <br />
            <span>011001010110</span>
            <br />
            <span>110010100110101010101</span>
          </div>
        </div>
        <div className={style.footer__conclusion}>
          Начните воплощать мечту ✨
          <br />
          в реальность 👨🏻‍💼 вместе с нами
        </div>
        <div className={style.footer__c2_right}>
          <div className={style.footer__c2_right_in}>
            <br />
            <span> 0101101011010101101</span>
            <br />
            <span style={{"opacity": '55%'}}> 110010101010101</span>
            <br />
            <span style={{"opacity": '40%'}}> 01100101011011001101101010</span>
            <br />
            <span style={{"opacity": '55%'}}> 1100101010101</span>
            <br />
            <span> 01100101011010101001101</span>
            <br />
            <span style={{"opacity": '40%'}}> 110010011001010110</span>
            <br />
            <span>11001011001101010101</span>
            <br />
            <span> 011001010110</span>
            <br />
            <span> 110010100110101010101</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer