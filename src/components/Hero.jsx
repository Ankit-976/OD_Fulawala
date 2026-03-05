import React from 'react'
import Button from './Button'

const Hero = () => {
  const btn = "Get Your Flowers"
  return (
    <div className='lg:h-screen pt-10 lg:bg-[url(/herobg.png)] lg:bg-cover lg:bg-center'>
        <img src="/herobg.png" alt="Background" className='lg:hidden md:absolute -z-10' />
        <div className='lg:pt-57 pt-5 flex lg:h-screen lg:pl-27 px-4 flex-col items-center md:items-start text-center md:text-start flex-wrap lg:w-3xl  lg:gap-6 gap-4 lg:text-white '>
            <h1 style={{fontFamily: "var(--font-heading)"}} className='lg:text-6xl text-3xl'>Get Fresh Pooja Flowers <br />Before 8 AM</h1>
            <h1 style={{fontFamily: "var(--font-heading)"}} className='lg:text-4xl text-2xl'>ପୂର୍ବାହ୍ନ 8 ଟା ପୂର୍ବରୁ ତାଜା ପୂଜା ଫୁଲ ପାଆନ୍ତୁ |</h1>
            <p className='lg:text-2xl text-xl' style={{fontFamily: "var(--font-body)"}}>
              Ensure Your Daily Prayers are Blessed with Fresh Flowers. Your Monthty Subscription Ensures an Automatic Pooja Flower Delivery at Your Doorstep. Rain Or Shine.Early Every Morning.
            </p>
            <Button message={btn}/>
        </div>
    </div>
  )
}

export default Hero
