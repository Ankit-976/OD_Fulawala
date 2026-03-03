import React from 'react'
import { flower, sun, tag, kalash, subscribe, flowerBasket, delivery } from "../assets/icons/icons";
import Button from './Button';

const PlansCard = () => {
  return (
    <div className='flex flex-col items-center rounded-3xl bg-blue-50 shadow-[0_10px_30px_rgba(0,0,0,0.3)] border border-[#F3E8DA] w-fit p-7 gap-2 h-fit'>
          <img src={flower} alt="" className='w-16' />
          <h2 className='text-4xl font-bold'>$299<span className='text-xl font-normal'>/Month</span></h2>
          <span className='text-2xl font-semibold' style={{fontFamily:"var(--font-body)"}}>BASIC</span>
          <ul className='w-60 flex flex-col gap-2 py-3'>
            <li>Fresh marigolds and china roses</li>
            <li>Tulsi leaves</li>
          </ul>
          <Button message="Subscribe"/>
    </div>
  )
}

export default PlansCard
