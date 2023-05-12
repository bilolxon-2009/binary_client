import style from "./Banner.module.scss"
import eye from "../../assets/👀.svg"
import imgomp from "../../assets/🧑_💻.svg"
import imgColor from "../../assets/🧑_🎨.svg"
import ImgGroup from "../../assets/coders-discussing-about-source-code-compiling-discovers-errors-asks-rest-team-explanations-front-multiple-screens-running-algorithms-software-developers-doing-teamwork 1.jpg"
import Scrollroute from '../../utils/scrollroute/Scrollroute'
import { Container, MainLink } from '../../utils/Components'
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
function Banner() {
    const componentRef = useRef(null);
    useEffect(() => {
        gsap.from(componentRef.current, {
            x: 200,
            duration: 1
        });
    }, []);
    return (
        <div className={style.banner} id='banner'>
            <h1 className={style.text}>Команда лучших  <img src={imgomp} alt="" />   программистов
                <br /> и  <img src={imgColor} alt="" />   дизайнеров в вашей стране</h1>

            <img src={ImgGroup} alt="" ref={componentRef} />
            <MainLink text={"Подробнее"} icon={eye} link={"#"} />

            <Scrollroute routeName={"banner"} />
        </div>
    )
}

export default Banner