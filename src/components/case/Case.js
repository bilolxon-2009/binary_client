import React, { useState } from 'react'
import style from "./Case.module.scss"
import family from '../../essets/family.svg'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import { Mousewheel } from "swiper";
import "swiper/css";
import "./styles.scss";
import data from './swiperData.json'
import medals from '../../essets/medals.svg'
function Case() {
    const [activeTextIndex, setActiveTextIndex] = useState(0)
    return (
        <div className={style.case}>
            <h2 className={style.title}>Мы выросли из компании семейного <img src={family} alt="family" /> типа в 🏙️ компанию, успешно консультирующую многие бренды и цифровые продукты на рынке</h2>
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
                            <h2 className='active'>{data[activeTextIndex].name}</h2>
                            :
                            <></>
                    }
                </div>
            </div>
            <button className='btns'><span>О команде</span><img src={medals} alt='Medals' /></button>
        </div>
    )
}

export default Case
