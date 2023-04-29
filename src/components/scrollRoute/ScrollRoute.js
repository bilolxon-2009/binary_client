import React, { useState } from 'react'
import { Link } from 'react-scroll'
import style from "./ScrollRoute.module.scss"
function ScrollRoute() {
    const [move, setMove] = useState(20)

    return (
        <div className={style.rounds}>
            <div className="line1"></div>
            <ul style={{ transform: `translateY(${move}px)` }}>
                <li>
                    <Link to="banner" onClick={() => setMove(30)} spy={true} smooth={true} offset={0} duration={500} >

                    </Link>
                </li>
                <li>
                    <Link to="video" spy={true} onClick={() => setMove(0)} smooth={true} offset={0} duration={500} >

                    </Link>
                </li>
                <li>
                    <Link to="case" spy={true} onClick={() => setMove(-30)} smooth={true} offset={0} duration={500} >

                    </Link>
                </li>
                <li>
                    <Link to="team" spy={true} onClick={() => setMove(-60)} smooth={true} offset={0} duration={500} >

                    </Link>
                </li>

                <li>
                    <Link to="faq" spy={true} smooth={true} offset={0} onClick={() => setMove(-90)} duration={500} >
                    </Link>
                </li>
                <li>
                    <Link to="footer" spy={true} smooth={true} offset={0} onClick={() => setMove(-90)} duration={500} >
                    </Link>
                </li>
            </ul>

        </div>
    )
}

export default ScrollRoute