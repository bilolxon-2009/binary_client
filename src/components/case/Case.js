import React from 'react'
import style from "./Case.module.scss"
import family from '../../essets/family.svg'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import { Mousewheel } from "swiper";
import "swiper/css";
import "./styles.scss";

function Case() {
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
                    <SwiperSlide>Talia <div className='line'></div></SwiperSlide>
                    <SwiperSlide>Brandon Blackwood <div className='line'></div></SwiperSlide>
                    <SwiperSlide>Alastin <div className='line'></div></SwiperSlide>
                    <SwiperSlide>Geeni <div className='line'></div></SwiperSlide>
                    <SwiperSlide>Beautyrest <div className='line'></div></SwiperSlide>
                    <SwiperSlide>EuroTruckServise <div className='line'></div></SwiperSlide>
                    <SwiperSlide>Mold <div className='line'></div></SwiperSlide>
                    <SwiperSlide>Slide 8 <div className='line'></div></SwiperSlide>
                    <SwiperSlide>Slide 9 <div className='line'></div></SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Case
