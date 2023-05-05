import React, { useState } from 'react'
import style from "./Case.module.scss"
import family from '../../essets/family.svg'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import { Mousewheel } from "swiper";
import "swiper/css";
import "./styles.scss";
import data from './data/images/swiperData.json'
import medals from '../../essets/medals.svg'
import house from '../../assets/house.svg'
import ScrollRoute from '../../utils/scrollroute/Scrollroute';
function Case() {
    const [activeTextIndex, setActiveTextIndex] = useState(0)
    return (
        <div className={style.case} id='case'>
            <h2 className={style.title}>Мы выросли из компании семейного <img src={family} alt="family" /> типа в <img src={house} alt="house" /> компанию, успешно консультирующую многие бренды и цифровые продукты на рынке</h2>
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
                            <img className='active__img' src={data[activeTextIndex].image} alt="" />
                            :
                            <></>
                    }
                </div>
            </div>
            <button className='btns'><span>О команде</span><img src={medals} alt='Medals' /></button>

            <ScrollRoute routeName={"case"} />
        </div>
    )
}

export default Case
