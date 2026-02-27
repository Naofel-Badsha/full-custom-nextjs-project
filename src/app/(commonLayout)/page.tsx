
import Hero from '../components/HomePagesAllSection/Hero'
import HAboutUsSection from '../components/HomePagesAllSection/HAboutUsSection'
import WhatWereOffering from '../components/HomePagesAllSection/WhatWereOffering'
import SmartInsurance from '../components/HomePagesAllSection/SmartInsurance'
import WorkingProcess from '../components/HomePagesAllSection/WorkingProcess'
import ProfessionalInsurance from '../components/HomePagesAllSection/ProfessionalInsurance'


const Homepage = () => {
  return (
    <div className=''>
      <Hero />
      <HAboutUsSection />
      <WhatWereOffering />
      <SmartInsurance />
      <WorkingProcess />
      <ProfessionalInsurance />
    </div>
  )
}

export default Homepage