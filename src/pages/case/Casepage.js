import React from 'react'
import styles from "./Casepage.module.scss"
import Casebanner from '../../components/caseBanner/Casebanner'
import Casecollection from '../../components/caseCollection/Casecollection'
import Caseselection from '../../components/caseSelection/Caseselection'
import Casefaq from '../../components/caseFaq/Casefaq'
import Casecontact from '../../components/CaseContact/Casecontact'
import Footer from '../../components/footer/Footer'

function Casepage() {
    return (
        <div style={styles}>
            <Casebanner />
            <Casecollection />
            <Caseselection />
            <Casefaq />
            <Casecontact />
            <Footer />
        </div>
    )
}

export default Casepage