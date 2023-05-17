import React, { useEffect, useState } from 'react'
import style from "./Case.module.scss"
import family from '../../essets/family.svg'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import { Mousewheel } from "swiper";
import "swiper/css";
import "./styles.scss";
import medals from '../../essets/medals.svg'
import house from '../../assets/house.svg'
import ScrollRoute from '../../utils/scrollroute/Scrollroute';
import talia from '../../assets/talia.svg'
import black from '../../assets/black.svg'
import alastin from '../../assets/alastin.svg'
import mold from '../../assets/mold.svg'
import geeni from '../../assets/geeni.svg'
import euro from '../../assets/euro.svg'
import beauty from '../../assets/beauty.svg'
import billiard from '../../assets/billiard.svg'
import scientist from '../../assets/scientist.svg'
import { Container } from '../../utils/Components';
import { useLocation } from 'react-router-dom';

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
        "name": "Alastin",
        "image": alastin
    },
    {
        "id": 9,
        "name": "Geeni",
        "image": geeni
    }

]

function Case({ about }) {
    const [activeTextIndex, setActiveTextIndex] = useState(0)
    const [idRoute, setIdRoute] = useState("case")
    let location = useLocation().pathname

    useEffect(() => {
        if (location === "/case") {
            setIdRoute("caseselection")
        } else if (location === "/service") {
            setIdRoute("servicecase")
        } else {
            setIdRoute("case")
        }
    }, [location])
    return (
        <div className={style.case} id={idRoute}>
            <Container>
                <div className={style.title}>{about ? <h2>Мы выросли из компании семейного <img src={family} alt="family" /> типа в <img src={house} alt="house" /> компанию, успешно консультирующую многие бренды и цифровые продукты на рынке</h2> : <h2>Наши лучшие работы <img src={billiard} alt='billiard' /> </h2>}</div>
                <div className='swiper__wrapper'>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={8}
                        mousewheel={true}
                        direction={"vertical"}
                        loop={true}
                        modules={[Mousewheel]}
                        className="mySwiper"
                    >
                        {
                            data ?
                                data.map((i, index) => (
                                    <SwiperSlide
                                        style={
                                            index === activeTextIndex
                                                ? { opacity: "1" }
                                                : { opacity: "0.5" }}
                                        onClick={() => setActiveTextIndex(index)}
                                        key={index}
                                    >
                                        {i.name} <div className='line'>
                                        </div></SwiperSlide>
                                ))
                                :
                                <></>
                        }
                    </Swiper>
                    <div className='active__wrapper'>
                        {
                            data ?
                                <div className='active__img__wrapper'>
                                    <img src={data[activeTextIndex].image} alt="" />
                                </div>
                                :
                                <></>
                        }
                        <div>
                            {
                                about ? <></>
                                    :
                                    <div className={style.description}>
                                        <h3>Описание</h3>
                                        <p>Эстетичная пиццерия в стиле испанской ценности в Нью-Йорке</p>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
                <button className='btns'>{about ? <div><span>О команде</span><img src={medals} alt='Medals' /></div> : <div><span>Посмотреть эту работу</span><img src={scientist} alt='scientist' /></div>}</button>

            </Container>
            <ScrollRoute routeName={idRoute} />
        </div>
    )
}

export default Case
