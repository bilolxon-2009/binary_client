import React from 'react'
import style from "./Service.module.scss"
import Servicebanner from '../../components/serviceBanner/Servicebanner'
import Serviceworks from '../../components/serviceWorks/Serviceworks'
import Faq from '../../components/faq/Faq'
import Footer from '../../components/footer/Footer'

function Service() {
    return (
        <div className={style.service}>
            <Servicebanner />
            <Serviceworks />
            <Faq />
            <Footer />
        </div>
    )
}

export default Service