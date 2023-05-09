import React from 'react'
import style from "./Casefaq.module.scss"
import Accordion from './accordion/Accordion';
import accordionData from './accordion/AccordionData.json';
import finger from '../../essets/finger.svg'
import { Container } from '../../utils/Components';
function Casefaq() {
    return (
        <div className={style.casefaq}>
            <Container>
                <div className={style.casefaq__child}>
                    <h2>Имея при себе много опыта, мы можем помочь в процветании <u>вашего</u> <img src={finger} alt='finger' /> бизнеса</h2>
                    <div className={style.casefaq__accordion}>
                        {accordionData.map(({ title, content, id }) => (
                            <Accordion title={title} content={content} key={id} />
                        ))}
                    </div>
                </div>
                <button className='btns'><span>Наше расположение</span></button>
            </Container>
        </div>
    )
}

export default Casefaq