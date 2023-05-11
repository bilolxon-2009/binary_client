import React, { useState } from 'react'
import style from "./Caseselection.module.scss"
import scientist from '../../assets/scientist.svg'
import billiard from '../../assets/billiard.svg'
import { Container } from '../../utils/Components';
import Case from '../case/Case';

function Caseselection() {
    return (
        <div className={style.caseselection}>
            <Case/>
        </div>
    )
}

export default Caseselection