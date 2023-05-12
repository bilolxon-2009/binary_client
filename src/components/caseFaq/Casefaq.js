import React from 'react'
import style from "./Casefaq.module.scss"
import Faq from '../faq/Faq';
function Casefaq() {
    return (
        <div className={style.casefaq}>
            <Faq/>
        </div>
    )
}

export default Casefaq