import React from 'react'
import HeroSection from '../../Components/navbar/herosection/HeroSection'
import PromoBanner from '../../Components/navbar/promobanner/PromoBanner'
import FeaturesSection from '../../Components/navbar/featuressection/FeaturesSection'
export default function Home() {
  return (
    <div>
      <HeroSection/>
      <PromoBanner/>
      <FeaturesSection/>
    </div>
  )
}
