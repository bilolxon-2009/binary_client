import React, { useState, useEffect } from 'react';
import style from "./Faq.module.scss";
import Accordion from './accordion/Accordion';
import accordionData from './accordion/AccordionData.json';
import message from '../../essets/message.svg'
import finger from '../../essets/finger.svg'
import ScrollRoute from '../../utils/scrollroute/Scrollroute';
import { useLocation } from 'react-router-dom';
import { MainLink } from '../../utils/Components';

function Faq({ dark }) {
    const [idRoute, setIdRoute] = useState("faq")
    let location = useLocation().pathname
    const [isActive, setIsActive] = useState(0)

    useEffect(() => {
        if (location === "/case") {
            setIdRoute("casefaq")
        } else if (location === "/service") {
            setIdRoute("servicefaq")
        } else {
            setIdRoute("faq")
        }
    }, [location])
    const selectActive = (id) => {
        if(isActive === id){
            setIsActive(0)
        }
        else{
            setIsActive(id)
        }
    }

    return (
        <div className={`${dark ? style.faq__dark : style.faq__light}`} id={idRoute}>
            <div className={style.faq}>
                    <div className={style.faq__child}>
                        <h2>Имея при себе много опыта, мы можем помочь в процветании <u>вашего</u> <img src={finger} alt='finger' /> бизнеса</h2>
                        <div className={style.accordion}>
                            {accordionData.map(({ title, content, id }) => (
                                <Accordion title={title} id={id} isActive={isActive} selectActive={selectActive} content={content} key={id} />
                            ))}
                        </div>
                    </div> 
                    <div className={style.faq__btn__wrapper}>
                    {dark ? <MainLink text={"Оставить заявку"} icon={message}/> : <MainLink text={"Наше расположение"}/>}
                    </div>
                <ScrollRoute routeName={idRoute} />
            </div>
        </div>
    );
}
export default Faq;