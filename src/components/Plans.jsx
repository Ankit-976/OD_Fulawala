import React from 'react'
import PlansCard from './PlansCard';


const Plans = () => {

  const plans = [
  {
    id: 1,
    name: "Basic",
    price: 349,
    features: [
      "Fresh flowers",
      "Tulsi leaves included"
    ]
  },
  {
    id: 2,
    name: "Standard",
    price: 749,
    features: [
      "Fresh flowers with Tulsi",
      "Garland for 2 days"
    ],
    popular: true
  },
  {
    id: 3,
    name: "Premium",
    price: 949,
    features: [
      "Fresh flowers with Tulsi",
      "Garland every day"
    ]
  }
];

  return (
    <div className='h-fit pt-10' id='plans'>
      <h3 className='text-center text-3xl' style={{fontFamily:"var(--font-heading)"}}>Choose Your Plan</h3>
      <div className='lg:py-15 py-10 sm:px-10 flex justify-evenly gap-15 sm:gap-10 lg:gap-0 flex-wrap '>
        {plans.map((item) =>{
          return <PlansCard key={item.id} name={item.name} price={item.price} features={item.features}/>
        })}
      </div>
    </div>
  )
}

export default Plans
