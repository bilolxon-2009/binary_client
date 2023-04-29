import React from 'react'
import style from "./Banner.module.scss"
import eye from "../../essets/👀.svg"
import imgomp from "../../essets/🧑_💻.svg"
import imgColor from "../../essets/🧑_🎨.svg"
import ImgGroup from "../../essets/coders-discussing-about-source-code-compiling-discovers-errors-asks-rest-team-explanations-front-multiple-screens-running-algorithms-software-developers-doing-teamwork 1.jpg"
function Banner() {
    return (
        <div className={style.banner}>
            <h1 className={style.text}>Команда лучших  <img src={imgomp} alt="" />   программистов
                <br /> и  <img src={imgColor} alt="" />   дизайнеров в вашей стране</h1>

            <img src={ImgGroup} alt="" />
            <button className='btns'><span>Подробнее</span> <img src={eye} alt="" /></button>
        </div>
    )
}

export default Banner