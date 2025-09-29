import React from 'react'
import HeroSection from '../../Components/navbar/herosection/HeroSection'

import FeaturesSection from '../../Components/navbar/featuressection/FeaturesSection'
import styles from './Home.module.css'

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.particleDecor}>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
      </div>
      <div className={styles.contentWrapper}>
        <HeroSection/>
        <FeaturesSection/>
      </div>
    </div>
  )
}