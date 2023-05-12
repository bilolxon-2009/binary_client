import React, { useState, useEffect } from 'react';
import style from "./Faq.module.scss";
import Accordion from './accordion/Accordion';
import accordionData from './accordion/AccordionData.json';
import message from '../../essets/message.svg'
import finger from '../../essets/finger.svg'
import ScrollRoute from '../../utils/scrollroute/Scrollroute';
import { Container } from '../../utils/Components';
import { useLocation } from 'react-router-dom';

function Faq({ dark }) {
    const [idRoute, setIdRoute] = useState("faq")
    let location = useLocation().pathname

    useEffect(() => {
        if (location == "/case") {
            setIdRoute("casefaq")
        } else {
            setIdRoute("faq")
        }
    }, [location])


    return (
        <div className={`${dark ? style.faq__dark : style.faq__light}`} id={idRoute}>
            <div className={style.faq}>
                <Container>
                    <div className={style.faq__child}>
                        <h2>Имея при себе много опыта, мы можем помочь в процветании <u>вашего</u> <img src={finger} alt='finger' /> бизнеса</h2>
                        <div className={style.accordion}>
                            {accordionData.map(({ title, content, id }) => (
                                <Accordion title={title} content={content} key={id} />
                            ))}
                        </div>
                    </div>
                    <button className='btns'>{dark ? <div><span>Оставить заявку</span><img src={message} alt='Message' /></div> : <span>Наше расположение</span>}</button>
                </Container>
                <ScrollRoute routeName={idRoute} />
            </div>
        </div>
    );
}
export default Faq;