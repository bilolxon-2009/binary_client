import React from 'react'
import style from "./Team.module.scss"
import ScrollRoute from '../../utils/scrollroute/Scrollroute'
function Team() {
    return (
        <div className={style.team} id='team'>Team

            <ScrollRoute routeName={"team"} />
        </div>
    )
}

export default Team