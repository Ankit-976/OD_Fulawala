import React from 'react'
import PlansCard from './PlansCard';


const Plans = () => {
  return (
    <div className='h-fit lg:pt-30 pt-10 pb-20'>
      <h3 className='text-center text-3xl' style={{fontFamily:"var(--font-heading)"}}>Choose Your Plan</h3>
      <div className='px-45 lg:py-20 py-10 flex justify-evenly gap-15 flex-wrap'>
        <PlansCard />
        <PlansCard />
        <PlansCard />
      </div>
    </div>
  )
}

export default Plans
