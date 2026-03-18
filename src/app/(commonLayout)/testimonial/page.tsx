import AllTestimonials from '@/app/components/TestimonialAllSection/AllTestimonials'
import TestimainalBanner from '@/app/components/TestimonialAllSection/TestimainalBanner'
import Link from 'next/link'
import React from 'react'

const TestimonialPage = () => {
  return (
    <div>
      <TestimainalBanner />
      <AllTestimonials />
    </div>
  )
}

export default TestimonialPage