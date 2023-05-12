import React from 'react';
import style from "./Serviceworks.module.scss";
import { MainLink } from '../../utils/Components';
import brain from "../../assets/🧠.svg";
import beauty from "../../assets/⚜️.svg";
import phone from "../../assets/📱.svg";
import bomb from "../../assets/💣.svg";

function Serviceworks() {
    return (
        <div className={style.serviceworks}>
            <div className={style.serviceworks__container}>
                <div className={style.serviceworks__header}>
                    <h2>Что мы можем вам предложить </h2>
                </div>
                <div className={style.serviceworks__choices}>
                    <div className={style.serviceworks__choise1}>
                        <h2>Logo, branding<img src={bomb} alt="" /></h2>
                        <p>Дизайн сайтов и мобильных приложений, Дизайн постов, Дизайн баннеров, Логотип, Брендинг.</p>
                    </div>
                    <div className={style.serviceworks__choise2}>
                        <h2>Web design<img src={beauty} alt="" /></h2>
                        <p>Одностраничные, сайт-каталог, коммерческие сайты, сайты организаций, интернет-магазины, доски объявлений, сайты СМИ и т.д.</p>
                    </div>
                    <div className={style.serviceworks__choise1}>
                        <h2>Mobile App <img src={phone} alt="" /></h2>
                        <p>IOS, Android, мобильные веб-приложения, нативные приложения и гибридные приложения.</p>
                    </div>
                    <div className={style.serviceworks__choise2}>
                        <h2>Ux & Ui design <img src={brain} alt="" /></h2>
                        <p>CRM (управление взаимоотношениями с клиентами), SFA (автоматизация отдела продаж), PM (управление проектами), HRM (управление персоналом), ERP (планирование ресурсов предприятия), BPMS (система управления бизнес-процессами), LMS (система управления обучением) и другие</p>
                    </div>
                </div>
                <div className={style.serviceworks__btn}>
                    <MainLink className={style.serviceworks__btnEl} text={"ВОУ!"} link={"#"} />   
                </div>
            </div>
        </div>
    )
}

export default Serviceworks