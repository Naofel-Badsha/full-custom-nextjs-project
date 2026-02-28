
import Hero from '../components/HomePagesAllSection/Hero'
import HAboutUsSection from '../components/HomePagesAllSection/HAboutUsSection'
import WhatWereOffering from '../components/HomePagesAllSection/WhatWereOffering'
import SmartInsurance from '../components/HomePagesAllSection/SmartInsurance'
import CaseStudy from '../components/HomePagesAllSection/CaseStudy'
import WorkingProcess from '../components/HomePagesAllSection/WorkingProcess'
import ProfessionalInsurance from '../components/HomePagesAllSection/ProfessionalInsurance'
import TeamMembers from '../components/HomePagesAllSection/TeamMembers'
import CostCalculate from '../components/HomePagesAllSection/CostCalculate'



const Homepage = () => {
  return (
    <div className=''>
      <Hero />
      <HAboutUsSection />
      <WhatWereOffering />
      <SmartInsurance />
      <CaseStudy />
      <WorkingProcess />
      <ProfessionalInsurance />
      <TeamMembers />
      <CostCalculate />
    </div>
  )
}

export default Homepage