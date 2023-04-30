import React from 'react';
import style from "./Faq.module.scss";
import Accordion from './accordion/Accordion';
import accordionData from './accordion/AccordionData.json';
import ScrollRoute from '../../utils/scrollroute/Scrollroute';
function Faq() {
    return (
        <div className={style.faq} id='faq'>
            <div className={style.faq__child}>
                <h2>Имея при себе много опыта, мы можем помочь в процветании <u>вашего</u> бизнеса</h2>
                <div className={style.accordion}>
                    {accordionData.map(({ title, content, id }) => (
                        <Accordion title={title} content={content} key={id} />
                    ))}
                </div>
            </div>
            <button className='btns'><span>Оставить заявку</span></button>
            <ScrollRoute routeName={"faq"} />

        </div>
    );
}
export default Faq;