import React from 'react'
import PlansCard from './PlansCard';


const Plans = () => {
  return (
    <div className='h-fit pt-10'>
      <h3 className='text-center text-3xl' style={{fontFamily:"var(--font-heading)"}}>Choose Your Plan</h3>
      <div className='lg:py-15 py-10 flex justify-evenly gap-15 lg:gap-0 flex-wrap'>
        <PlansCard />
        <PlansCard />
        <PlansCard />
      </div>
    </div>
  )
}

export default Plans
