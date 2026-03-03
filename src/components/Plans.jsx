import React from 'react'
import PlansCard from './PlansCard';


const Plans = () => {
  return (
    <div>
      <h3 className='text-center pt-30 text-3xl' style={{fontFamily:"var(--font-heading)"}}>Choose Your Plan</h3>
      <div className='px-45 py-20 flex justify-evenly'>
        <PlansCard />
        <PlansCard />
        <PlansCard />
      </div>
    </div>
  )
}

export default Plans
