import React from 'react';
import { MainLink } from '../../utils/Components';
import style from "./Service.module.scss";
import eye from "../../assets/👀.svg";
import baloon from "../../assets/🎈.svg";

function Servicebanner() {
    return (
        <div className={style.servicebanner}>
            <div className={style.servicebanner__container}>
                <div className={style.servicebanner__wrapper}>
                    <h1>Услуги <img src={baloon} alt="" /></h1>
                    <MainLink text={"Подробнее"} icon={eye} link={"#"} />
                </div>
            </div>
        </div>
    )
}

export default Servicebanner