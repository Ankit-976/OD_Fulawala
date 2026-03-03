import React from 'react'
import Button from './Button'

const NavBar = () => {
  return (
    <div className='flex px-20 justify-between fixed top-0 py-2 w-full items-center text-[#2E2E2E] backdrop-blur-md bg-white/40'>
        <div className='text-[20px] font-semibold' style={{fontFamily:"var(--font-heading)"}}>OD Flowers</div>
        <div className='flex gap-10 items-center font-semibold cursor-pointer'>
            <li className='list-none'>Home</li>
            <li className='list-none'>Plans</li>
            <li className='list-none'>Contact</li>
            <li className='list-none'><Button message="Subscribe"/></li>
        </div>
    </div>
  )
}

export default NavBar
