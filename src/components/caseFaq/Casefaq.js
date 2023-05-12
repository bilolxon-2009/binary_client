import React from 'react'
import style from "./Casefaq.module.scss"
<<<<<<< HEAD
import Accordion from '../faq/accordion/Accordion';
import accordionData from '../faq/accordion/AccordionData.json';
import finger from '../../essets/finger.svg'
import { Container } from '../../utils/Components';
=======
>>>>>>> origin/jaloliddin
import ScrollRoute from '../../utils/scrollroute/Scrollroute';
import Faq from '../faq/Faq';
function Casefaq() {
    return (
        <div className={style.casefaq} id='casefaq'>
            <Faq />
            <ScrollRoute routeName={"casefaq"} />

        </div>
    )
}

export default Casefaq