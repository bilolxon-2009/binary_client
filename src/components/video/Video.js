import React from 'react'
import style from "./Video.module.scss"
import ReactPlayer from "react-player"
import backgroundVideo from "../../essets/bgVideo.mp4"
import suitcase from "../../essets/suitcase.svg"
import smilyIcon from "../../essets/smile.svg"
import man from "../../essets/man.png"
import { MainLink } from '../../utils/Components'


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
           <h2>Мы верим, что человек <img src={smilyIcon} />, бизнес <img src={man} /> и государство ⚔️ нуждаются в качественном опыте взаимодействии. </h2>
          <div className={style.videoBottomPart}>
          <h3>Мы помогаем разрабатывать продукты, которые уже сегодня создают такой опыт</h3>
          <MainLink text="Наш кейс" icon={suitcase} link="#"/>
          </div>
           </div>
        </div>
    )
}

export default Video