import React from 'react';
import style from "./Faq.module.scss";
import Accordion from './accordion/Accordion';
import accordionData from './accordion/AccordionData.json';
function Faq() {
    return (
        <div className={style.faq}>
            <div className={style.faq__child}>
                <h2>Имея при себе много опыта, мы можем помочь в процветании <u>вашего</u> бизнеса</h2>
                <div className={style.accordion}>
                    {accordionData.map(({ title, content }) => (
                        <Accordion title={title} content={content} />
                    ))}
                </div>
            </div>
            <button className='btns'><span>Оставить заявку</span></button>
        </div>
    );
}
export default Faq;