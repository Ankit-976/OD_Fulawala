import React from 'react'

const Button = (props) => {
  return (
    <>
    <button className='bg-[#DD721D] py-2 px-5 rounded-4xl cursor-pointer w-fit font-semibold text-white' >
        {props.message}
    </button>
    </>
  )
}

export default Button 
