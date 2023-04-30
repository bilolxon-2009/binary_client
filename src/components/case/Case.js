import React from 'react'
import style from "./Case.module.scss"
import ScrollRoute from '../../utils/scrollroute/Scrollroute'
function Case() {
    return (
        <div className={style.case} id='case'>
            <h1>Case</h1>
            <ScrollRoute routeName={"case"} />
        </div>
    )
}

export default Case