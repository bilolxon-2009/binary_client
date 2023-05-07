import React from 'react';
import style from "./Faq.module.scss";
import Accordion from './accordion/Accordion';
import accordionData from './accordion/AccordionData.json';
import message from '../../essets/message.svg'
import finger from '../../essets/finger.svg'
import ScrollRoute from '../../utils/scrollroute/Scrollroute';
import { Container } from '../../utils/Components';

function Faq() {
    return (
        <div className={style.faq} id='faq'>
            <Container>
                <div className={style.faq__child}>
                    <h2>Имея при себе много опыта, мы можем помочь в процветании <u>вашего</u> <img src={finger} alt='finger' /> бизнеса</h2>
                    <div className={style.accordion}>
                        {accordionData.map(({ title, content, id }) => (
                            <Accordion title={title} content={content} key={id} />
                        ))}
                    </div>
                </div>
                <button className='btns'><span>Оставить заявку</span><img src={message} alt='Message' /></button>
                <ScrollRoute routeName={"faq"} />
            </Container>

        </div>
    );
}
export default Faq;