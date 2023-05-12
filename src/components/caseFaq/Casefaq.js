import React from 'react'
import style from "./Casefaq.module.scss"
import ScrollRoute from '../../utils/scrollroute/Scrollroute';
import Faq from '../faq/Faq';
function Casefaq() {
    return (
        <div className={style.casefaq} id='casefaq'>
            <Faq />
            <ScrollRoute routeName={"casefaq"} />

        </div>
    )
}

export default Casefaq