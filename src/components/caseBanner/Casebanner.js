import React from 'react'
import styles from "./Casebanner.module.scss"
import { Container, MainLink } from '../../utils/Components'
import suitecase from "../../essets/suitcase.svg"
import eyes from "../../assets/👀.svg"
import moldImg from "../../assets/mold.svg"
import taliaImg from "../../assets/TALIAorigin.svg"
import eurotruckImg from "../../assets/euro.svg"
import alastin from "../../assets/alastin.svg"
import blackImg from "../../assets/black.svg"
import beauty from "../../assets/beauty.svg"
import geeni from "../../assets/geeni.svg"

function Casebanner() {
    return (
        <div className={styles.casebanner}>
            <div className={styles.casebanner_text}>
                <h1>Наш кейс</h1><img src={suitecase} alt="" />
            </div>
            <div className={styles.casebanner_cards}>
                <div className={styles.casebanner_cards_wrap}>
                    <div className={`${styles.casebanner_card}`}>
                        <img src={moldImg} alt="" />
                    </div>
                    <div className={`${styles.casebanner_card} talia`}>
                        <img src={taliaImg} alt="" />
                    </div>
                </div>
                <div className={styles.casebanner_cards_wrap}>
                    <div className={`${styles.casebanner_card}`}>
                        <img src={eurotruckImg} alt="" />
                    </div>
                    <div className={`${styles.casebanner_card}`}>
                        <img src={alastin} alt="" />
                    </div>
                    <div className={`${styles.casebanner_card}`}>
                        <img src={beauty} alt="" />
                    </div>
                </div>
                <div className={styles.casebanner_cards_wrap}>
                    <div className={`${styles.casebanner_card}`}>
                        <img src={blackImg} alt="" />
                    </div>
                    <div className={`${styles.casebanner_card}`}>
                        <img src={geeni} alt="" />
                    </div>
                </div>

            </div>
            <MainLink text={"Подробнее"} icon={eyes} link={"#"} />
        </div>
    )
}

export default Casebanner