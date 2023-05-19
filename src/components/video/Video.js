import React from 'react'
import style from "./Video.module.scss"
import ReactPlayer from "react-player"
import backgroundVideo from "../../essets/bgVideo.mp4"
import suitcase from "../../essets/suitcase.svg"
import smilyIcon from "../../essets/smile.svg"
import man from "../../essets/man.svg"
import { MainLink } from '../../utils/Components'
import Scrollroute from '../../utils/scrollroute/Scrollroute'
import backgroundVideo_mobile from "../../essets/bgVideo_mobile.mp4"

function Video() {
    return (
        <div className={style.video} id='video'>
            <ReactPlayer
                className={style.backgroundVideo}
                playing
                muted
                loop
                url={backgroundVideo}
            />
             <ReactPlayer
                className={style.backgroundVideoMobile}
                playing
                muted
                loop
                url={backgroundVideo_mobile}
            />
            <div className={style.videoPartSections}>
                <h2>Мы верим, что человек <img src={smilyIcon} alt='emojies' />, бизнес <img src={man} alt='emojies' /> и государство ⚔️ нуждаются в качественном опыте взаимодействии. </h2>
                <div className={style.videoBottomPart}>
                    <h3>Мы помогаем разрабатывать продукты, которые уже сегодня создают такой опыт</h3>
                    <MainLink text="Наш кейс" icon={suitcase} link="#" className={style.button} />
                </div>
            </div>
            <Scrollroute routeName={"video"} />

        </div>
    )
}
export default Video