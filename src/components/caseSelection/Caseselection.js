import React, { useState } from 'react'
import style from "./Caseselection.module.scss"
import scientist from '../../assets/scientist.svg'
import billiard from '../../assets/billiard.svg'
import { Container } from '../../utils/Components';
import ScrollRoute from '../../utils/scrollroute/Scrollroute';

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
    return (
        <div className={style.caseselection} id='caseselection'>
            <Container>
                <h2 className={style.case__selection__title}>Наши лучшие работы <img src={billiard} alt="billiard" /></h2>
                <div className='caseSelection__swiper__wrapper'>
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
                    <div>
                        {
                            data ?
                                <div className='caseSelection__active__wrapper'>
                                    <div className='caseSelection__active__img__wrapper'>
                                        <img src={data[activeTextIndex].image} alt="" />
                                    </div>
                                    <div className='active__img__description'>
                                        <h3>Описание</h3>
                                        <p>Эстетичная пиццерия в стиле испанской ценности в Нью-Йорке</p>
                                    </div>
                                </div>
                                :
                                <></>
                        }
                    </div>
                </div>
                <button className='btns'><span>Посмотреть эту работу</span><img src={scientist} alt='scientist' /></button>
            </Container>
            <ScrollRoute routeName={"caseselection"} />
        </div>
    )
}

export default Caseselection