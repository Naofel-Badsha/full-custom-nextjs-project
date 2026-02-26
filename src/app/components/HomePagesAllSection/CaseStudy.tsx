import React from 'react'

interface StydysTypes {
    id: string,
    image: string,
    name: string,
    description: string,
    tagname: string,
    company: string

}

const studys: StydysTypes[] = [
    {
        id:'1',
        image: '/assets/home.webp',
        name: 'Home & Property Insurance',
        description: 'Our motor insurance covers accident damage, theft, fire, and third-party liability. We offer quick claim processing, affordable premiums, and reliable roadside support to keep your vehicle protected at all times.',
        tagname: 'Family',
        company: 'HomeShield Protection Ltd.'
    },
    {
        id:'2',
        image: '/assets/helth.webp',
        name: 'Health Insurance Protection',
        description: 'We provide comprehensive health insurance coverage including hospitalization, surgery costs, emergency treatment, and medical checkups. Our flexible plans ensure financial protection and peace of mind for you and your family.',
        tagname: 'Health',
        company: 'SecureLife Insurance Ltd.'
    },
    {
        id:'3',
        image: '/assets/motor.webp',
        name: 'Motor & Vehicle Insurance',
        description: 'Our motor insurance covers accident damage, theft, fire, and third-party liability. We offer quick claim processing, affordable premiums, and reliable roadside support to keep your vehicle protected at all times.',
        tagname: 'Motor',
        company: 'SafeDrive Assurance Company'
    },
    {
        id:'4',
        image: '/assets/life.webp',
        name: 'Life Insurance Coverage',
        description: 'Our life insurance plans provide long-term financial security for your loved ones. We offer term life, whole life, and savings-based policies designed to support your family’s future stability.',
        tagname: 'Life',
        company: 'FutureCare Life Insurance'
    },
    {
        id:'5',
        image: '/assets/travel.webp',
        name: 'Travel Insurance Plan',
        description: 'Travel confidently with our comprehensive travel insurance. We cover medical emergencies, trip cancellations, lost baggage, and flight delays, ensuring a safe and stress-free journey anywhere in the world.',
        tagname: 'Travel',
        company: 'GlobalTravel Secure Co.'
    },
    {
        id:'6',
        image: '/assets/business.webp',
        name: 'Business & Liability Insurance',
        description: 'We protect businesses from financial risks including property damage, employee claims, legal liabilities, and unexpected losses. Our customized insurance solutions help your company operate safely and confidently.',
        tagname: 'Business',
        company: 'PrimeGuard Business Insurance'
    },
]

const CaseStudy = () => {
  return (
    <div>CaseStudy</div>
  )
}

export default CaseStudy