import React from 'react';
import { MainLink } from '../../utils/Components';
import style from "./Service.module.scss";
import eye from "../../assets/👀.svg";
import baloon from "../../assets/🎈.svg";
import ScrollRoute from '../../utils/scrollroute/Scrollroute';

function Servicebanner() {
    return (
        <div className={style.servicebanner} id='servicebanner'>
            <div className={style.servicebanner__container}>
                <div className={style.servicebanner__wrapper}>
                    <h1>Услуги <img src={baloon} alt="" /></h1>
                    <MainLink text={"Подробнее"} icon={eye} link={"#"} />
                </div>

            </div>
            <ScrollRoute routeName={"servicebanner"} />

        </div>
    )
}

export default Servicebanner