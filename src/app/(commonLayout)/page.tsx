import React from 'react'
import Hero from '../components/HomePagesAllSection/HeroSection/Hero'
import HAboutUsSection from '../components/HomePagesAllSection/HeroSection/HAboutUsSection'
import WhatWereOffering from '../components/HomePagesAllSection/HeroSection/WhatWereOffering'

const Homepage = () => {
  return (
    <div className=''>
      <Hero />
      <HAboutUsSection />
      <WhatWereOffering />
    </div>
  )
}

export default Homepage