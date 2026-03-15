import AboutBanner from '@/app/components/AboutPageAllSection/AboutBanner'
import AboutContact from '@/app/components/AboutPageAllSection/AboutContact'
import AboutUs from '@/app/components/AboutPageAllSection/AboutUs'
import React from 'react'

const AboutPage = () => {
  return (
    <div className=''>
      <AboutBanner />
      <AboutUs />
      <AboutContact />
    </div>
  )
}

export default AboutPage