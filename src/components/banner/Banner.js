import React from 'react'
import style from "./Banner.module.scss"
import eye from "../../assets/👀.svg"
import imgomp from "../../assets/🧑_💻.svg"
import imgColor from "../../assets/🧑_🎨.svg"
import ImgGroup from "../../assets/coders-discussing-about-source-code-compiling-discovers-errors-asks-rest-team-explanations-front-multiple-screens-running-algorithms-software-developers-doing-teamwork 1.jpg"
import Scrollroute from '../../utils/scrollroute/Scrollroute'
function Banner() {
    return (
        <div className={style.banner} id='banner'>
            <h1 className={style.text}>Команда лучших  <img src={imgomp} alt="" />   программистов
                <br /> и  <img src={imgColor} alt="" />   дизайнеров в вашей стране</h1>

            <img src={ImgGroup} alt="" />
            <button className='btns'><span>Подробнее</span> <img src={eye} alt="" /></button>
            <Scrollroute routeName={"banner"} />
        </div>
    )
}

export default Banner