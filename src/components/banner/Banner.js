import style from "./Banner.module.scss"
import eye from "../../assets/👀.svg"
import imgomp from "../../assets/🧑_💻.svg"
import imgColor from "../../assets/🧑_🎨.svg"
import ImgGroup from "../../assets/coders-discussing-about-source-code-compiling-discovers-errors-asks-rest-team-explanations-front-multiple-screens-running-algorithms-software-developers-doing-teamwork 1.jpg"
import Scrollroute from '../../utils/scrollroute/Scrollroute'
import { MainLink } from '../../utils/Components'
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
function Banner() {
    const componentRef = useRef(null);
    useEffect(() => {
        const el1 = componentRef.current;
        gsap.fromTo(el1, { translateX: "200px" }, { translateX: "0", opacity: 1 });
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