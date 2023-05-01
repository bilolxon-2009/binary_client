import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import style from "./ScrollRoute.module.scss"

function ScrollRoute({ routeName }) {
    const [move, setMove] = useState(20)
    const [navRoute, setNavRoute] = useState([])
    const [navIndex, setNavIndex] = useState(0)
    const navData = [
        {
            id: 1,
            nav_title: "Banner",
            route: "banner"
        },
        {
            id: 2,
            nav_title: "Video",
            route: "video"
        },
        {
            id: 3,
            nav_title: "Case",
            route: "case"
        },
        {
            id: 4,
            nav_title: "Team",
            route: "team"
        },
        {
            id: 5,
            nav_title: "Faq",
            route: "faq"
        },
        {
            id: 6,
            nav_title: "Footer",
            route: "footer"
        }
    ];

    console.log(navData.slice(3, 6))
    useEffect(() => {
        if (routeName === "banner") {
            setNavRoute(navData.slice(0, 4))
            setNavIndex(0)
        } if (routeName === "video") {
            setNavRoute(navData.slice(0, 4))
            setNavIndex(1)
        }
        if (routeName === "case") {
            setNavRoute(navData.slice(1, 5))
            setNavIndex(1)
        }
        if (routeName === "team") {
            setNavRoute(navData.slice(2, 6))
            setNavIndex(1)
        }
        if (routeName === "faq") {
            setNavRoute(navData.slice(2, 6))
            setNavIndex(2)
        }
        if (routeName === "footer") {
            setNavRoute(navData.slice(2, 6))
            setNavIndex(3)
        }
    }, [routeName])


    return (
        <div className={style.rounds}>
            <div className="line1"></div>
            <ul style={{ transform: `translateY(${move}px)` }}>
                {navRoute?.map((nav, inx) => (
                    <li key={inx} >
                        <Link className={inx === navIndex ? style.active : ""} to={nav.route} spy={true} smooth={true} offset={0} duration={500} >

                        </Link>
                    </li>
                ))}
            </ul>

        </div>
    )
}


export default ScrollRoute