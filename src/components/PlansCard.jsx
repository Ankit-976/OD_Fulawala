import React from 'react'
import { flower, sun, tag, kalash, subscribe, flowerBasket, delivery } from "../assets/icons/icons";
import Button from './Button';

const PlansCard = () => {
  return (
    <div className='flex flex-col items-center rounded-3xl bg-blue-50 shadow-[0_10px_30px_rgba(0,0,0,0.3)] border border-[#F3E8DA] w-fit lg:p-7 p-5 lg:gap-2 gap-1 h-fit'>
          <img src={flower} alt="" className='lg:w-16 w-14' />
          <h2 className='lg:text-4xl text-2xl font-bold'>$299<span className='lg:text-xl text-[1.1rem] font-normal'>/Month</span></h2>
          <span className='lg:text-2xl text-xl font-semibold' style={{fontFamily:"var(--font-body)"}}>BASIC</span>
          <ul className='w-60 flex font-semibold flex-col lg:gap-2 lg:py-3'>
            <li>Fresh marigolds and china roses</li>
            <li>Tulsi leaves</li>
          </ul>
          <Button message="Subscribe"/>
    </div>
  )
}

export default PlansCard
