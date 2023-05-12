import React from 'react'
import style from "./Caseselection.module.scss"
import { Container } from '../../utils/Components';
import ScrollRoute from '../../utils/scrollroute/Scrollroute';
import family from '../../essets/family.svg'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import { Mousewheel } from "swiper";
import "swiper/css";


import medals from '../../essets/medals.svg'
import house from '../../assets/house.svg'
import talia from '../../assets/talia.svg'
import black from '../../assets/black.svg'
import alastin from '../../assets/alastin.svg'
import mold from '../../assets/mold.svg'
import geeni from '../../assets/geeni.svg'
import euro from '../../assets/euro.svg'
import beauty from '../../assets/beauty.svg'
import billiard from '../../assets/billiard.svg'
import scientist from '../../assets/scientist.svg'
import Case from '../case/Case';

const data = [
    {
        "id": 1,
        "name": "Talia",
        "image": talia

    },
    {
        "id": 2,
        "name": "Brandon Blackwood",
        "image": black
    },
    {
        "id": 3,
        "name": "Alastin",
        "image": alastin
    },
    {
        "id": 4,
        "name": "Mold",
        "image": mold
    },
    {
        "id": 5,
        "name": "Geeni",
        "image": geeni
    },
    {
        "id": 6,
        "name": "Beautyrest",
        "image": beauty
    },
    {
        "id": 7,
        "name": "EuroTruckService",
        "image": euro
    },
    {
        "id": 8,
        "name": "Slide 8",
        "image": geeni
    },
    {
        "id": 9,
        "name": "Slide 9",
        "image": talia
    }

]
import Case from '../case/Case';

function Caseselection() {
    const [activeTextIndex, setActiveTextIndex] = useState(0)
    return (
        <div className={style.caseselection} id='caseselection'>
            <Case />
        </div>
    )
}

export default Caseselection