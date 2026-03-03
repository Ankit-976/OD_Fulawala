import React from 'react'
import Button from './Button'

const Hero = () => {
  const btn = "Get Your Flowers"
  return (
    <div className='h-screen bg-[url(/herobg.png)] bg-cover bg-center'>
        <div className='pt-57 flex h-screen pl-27 flex-col flex-wrap w-3xl gap-6 text-white'>
            <h1 style={{fontFamily: "var(--font-heading)"}} className='text-6xl'>Get Fresh Pooja Flowers <br />Before 8 AM</h1>
            <h1 style={{fontFamily: "var(--font-heading)"}} className='text-4xl'>ପୂର୍ବାହ୍ନ 8 ଟା ପୂର୍ବରୁ ତାଜା ପୂଜା ଫୁଲ ପାଆନ୍ତୁ |</h1>
            <p className='text-2xl' style={{fontFamily: "var(--font-body)"}}>
              Ensure Your Daily Prayers are Blessed with Fresh Flowers. Your Monthty Subscription Ensures an Automatic Pooja Flower Delivery at Your Doorstep. Rain Or Shine.Early Every Morning.
            </p>
            <Button message={btn}/>
        </div>
    </div>
  )
}

export default Hero
