import React from 'react'
import style from "./Case.module.scss"
import family from '../../essets/family.svg'
function Case() {
    return (
        <div className={style.case}>
            <h2 className={style.title}>Мы выросли из компании семейного <img src={family} alt="family" /> типа в 🏙️ компанию, успешно консультирующую многие бренды и цифровые продукты на рынке</h2>
        </div>
    )
}

export default Case