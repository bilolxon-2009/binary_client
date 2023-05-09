import React from 'react'
import style from "./Service.module.scss"
import Servicebanner from '../../components/serviceBanner/Servicebanner'
import Serviceworks from '../../components/serviceWorks/Serviceworks'

function Service() {
    return (
        <div className={style.service}>
            <Servicebanner />
            <Serviceworks />
        </div>
    )
}

export default Service