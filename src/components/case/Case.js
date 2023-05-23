import React, { useEffect, useState } from 'react'
import style from "./Case.module.scss"
import family from '../../essets/family.svg'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import { Mousewheel, Navigation, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
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
import { useLocation } from 'react-router-dom';
import { MainLink } from '../../utils/Components';


const data = [
    {
        "id": 1,
        "name": "Talia",
        "image": talia,
        "description": "Эстетичная пиццерия в стиле испанской ценности в Нью-Йорке"
    },
    {
        "id": 2,
        "name": "Brandon Blackwood",
        "image": black,
        "description": "description"
    },
    {
        "id": 3,
        "name": "Alastin",
        "image": alastin,
        "description": "description"
    },
    {
        "id": 4,
        "name": "Mold",
        "image": mold,
        "description": "description"
    },
    {
        "id": 5,
        "name": "Geeni",
        "image": geeni,
        "description": "description"
    },
    {
        "id": 6,
        "name": "Beautyrest",
        "image": beauty,
        "description": "description"
    },
    {
        "id": 7,
        "name": "EuroTruckService",
        "image": euro,
        "description": "description"
    },
    {
        "id": 8,
        "name": "Alastin",
        "image": alastin,
        "description": "description"
    },
    {
        "id": 9,
        "name": "Geeni",
        "image": geeni,
        "description": "description"
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
            <div className={style.title}>{about ? <h2>Мы выросли из компании семейного <img src={family} alt="family" /> типа в <img src={house} alt="house" /> компанию, успешно консультирующую многие бренды и цифровые продукты на рынке</h2> : <h2>Наши лучшие работы <img src={billiard} alt='billiard' /> </h2>}</div>
            <div className={style.case__child}>
                <div>
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
                                        className='swiper__laptop'
                                    >
                                        {i.name} <div className='line'></div>
                                    </SwiperSlide>
                                ))
                                :
                                <></>
                        }
                    </Swiper>
                </div>
                <div className={style.active__wrapper}>
                    {
                        data ?
                            <div className={style.active__img__wrapper}>
                                <img src={data[activeTextIndex].image} alt="" />
                                <div className={style.description}>
                                    <h3>Описание</h3>
                                    <p>{data[activeTextIndex].description}</p>
                                </div>
                            </div>
                            :
                            <></>
                    }
                    <div className={style.btn__wrapper}>
                        {
                            about ?
                                <MainLink text={"О команде"} icon={medals} link={"#"} />
                                : <MainLink text={"Посмотреть эту работу"} icon={scientist} link={"#"} />
                        }
                    </div>
                </div>
            </div>
            <div className={style.case__child__mobile}>
                <Swiper
                    slidesPerView={1.2}
                    spaceBetween={2}
                    cssMode={true}
                    navigation={true}
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Mousewheel, Keyboard]}
                    className="mySwiper"
                >
                    {
                        data.map((c) => (
                            <SwiperSlide key={c.id}>
                                <div className='swiper-card-wrapper'>
                                <div className='mobile__swiper__card'>
                                    <img src={c.image} alt="" />
                                    <p>{c.description}</p>
                                </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <div className={style.btn__wrapper}>
                    {
                        about ?
                            <MainLink text={"О команде"} icon={medals} link={"#"} />
                            : <MainLink text={"Посмотреть эту работу"} icon={scientist} link={"#"} />
                    }
                </div>
            </div>
            <ScrollRoute routeName={idRoute} />
        </div>
    )
}

export default Case
