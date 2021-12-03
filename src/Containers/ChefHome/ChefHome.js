import React from 'react'

import styles from './ChefHome.module.css'

import ChefHomeLeftSec from '../../Components/ChefHomePage/ChefHomeLeftSec'
import ChefHomePageHighlight from '../../Components/ChefHomePage/ChefHomePageHighlight/ChefHomePageHighlight'
import PaymentHistory from '../../Components/ChefHomePage/PaymentHistory/PaymentHistory'
import Navbar from '../../Components/Navbar'

import { images } from '../../Components/StaticData'

function ChefHome() {
    return (
        <div >
            <Navbar images={images} />
            <div className={styles.ChefHomeWrapper}>
                <ChefHomeLeftSec />
                <div className={styles.ChefHomeRightSec}>
                    <ChefHomePageHighlight />
                    <PaymentHistory />
                </div>
            </div>
        </div>
    )
}

export default ChefHome
