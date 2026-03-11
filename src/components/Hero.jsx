import React from 'react'
import Button from './Button'

const Hero = () => {
  const btn = "Get Your Flowers"
  return (
    <div className='lg:h-screen pt-10 lg:bg-[url(/herobg.png)] lg:bg-cover lg:bg-center' id='hero'>
        <img src="/herobg.png" alt="Background" className='lg:hidden md:absolute -z-10 md:top-14' />
        <div className='lg:pt-25 xl:pt-45 md:pt-17 pt-5 flex lg:h-screen lg:pl-15 px-4 flex-col items-center md:items-start text-center md:text-start flex-wrap md:w-110 lg:w-xl xl:w-184 gap-4 md:text-white'>
            <h1 style={{fontFamily: "var(--font-heading)"}} className='lg:text-4xl xl:text-6xl text-3xl'>Get Fresh Pooja Flowers <br />Before 8 AM</h1>
            <h1 style={{fontFamily: "var(--font-heading)"}} className='lg:text-3xl xl:text-4xl text-2xl'>ପୂର୍ବାହ୍ନ 8 ଟା ପୂର୍ବରୁ ତାଜା ପୂଜା ଫୁଲ ପାଆନ୍ତୁ |</h1>
            <p className='lg:text-xl xl:text-2xl text-xl' style={{fontFamily: "var(--font-body)"}}>
              Ensure Your Daily Prayers are Blessed with Fresh Flowers. Your Monthty Subscription Ensures an Automatic Pooja Flower Delivery at Your Doorstep. Rain Or Shine.Early Every Morning.
            </p>
            <Button message={btn}  goToPlans="goToPlans"/>
        </div>
    </div>
  )
}

export default Hero
