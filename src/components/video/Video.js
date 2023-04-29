import React from 'react'
import style from "./Video.module.scss"
import backgroundVideo from "../../essets/bacgroundVideo.mp4"
import ReactPlayer from "react-player"
import suitcase from "../../essets/suitcase.svg"
import smilyIcon from "../../essets/smile.svg"


function Video() {
    return (
        <div className={style.video}>
          <ReactPlayer
           className={style.backgroundVideo} 
           playing
           muted
           loop
           url={backgroundVideo}
           />
           <div className={style.videoPartSections}>
           <h2>Мы верим, что человек <img src={smilyIcon} />, бизнес 👨🏻‍💼 и государство ⚔️ нуждаются в качественном опыте взаимодействии. </h2>
          <div className={style.videoBottomPart}>
          <h3>Мы помогаем разрабатывать продукты, которые уже сегодня создают такой опыт</h3>
          <button className='btns'><span>Наш кейс</span> <img src={suitcase} alt="" /></button>
          </div>
           </div>
        </div>
    )
}

export default Video