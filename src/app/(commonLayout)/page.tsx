
import Hero from '../components/HomePagesAllSection/Hero'
import HAboutUsSection from '../components/HomePagesAllSection/HAboutUsSection'
import WhatWereOffering from '../components/HomePagesAllSection/WhatWereOffering'
import SmartInsurance from '../components/HomePagesAllSection/SmartInsurance'
import WorkingProcess from '../components/HomePagesAllSection/WorkingProcess'


const Homepage = () => {
  return (
    <div className=''>
      <Hero />
      <HAboutUsSection />
      <WhatWereOffering />
      <SmartInsurance />
      <WorkingProcess />
    </div>
  )
}

export default Homepage