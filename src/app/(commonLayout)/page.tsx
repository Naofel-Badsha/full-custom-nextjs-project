
import Hero from '../components/HomePagesAllSection/Hero'
import HAboutUsSection from '../components/HomePagesAllSection/HAboutUsSection'
import WhatWereOffering from '../components/HomePagesAllSection/WhatWereOffering'
import SmartInsurance from '../components/HomePagesAllSection/SmartInsurance'
import CaseStudy from '../components/HomePagesAllSection/CaseStudy'
import WorkingProcess from '../components/HomePagesAllSection/WorkingProcess'
import ProfessionalInsurance from '../components/HomePagesAllSection/ProfessionalInsurance'
import TeamMembers from '../components/HomePagesAllSection/TeamMembers'
import CostCalculate from '../components/HomePagesAllSection/CostCalculate'
import Testimonial from '../components/HomePagesAllSection/Testimonial'
import Promo from '../components/HomePagesAllSection/Promo'
import NewsAndBlog from '../components/HomePagesAllSection/NewsAndBlog'
import Newsletter from '../components/HomePagesAllSection/Newsletter'



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
      <Testimonial />
      <Promo />
      <NewsAndBlog />
      <Newsletter />
    </div>
  )
}

export default Homepage