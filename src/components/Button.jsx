import React from 'react'

const Button = (props) => {
  const message = `Hello, I want to subscribe to the ₹${props.plan} plan!`;
  let hrefLink = "";
  if(props.plan){
    hrefLink = `https://wa.me/6372475659?text=${encodeURIComponent(message)}`
  }
  return (
    <>
    <a href = {hrefLink} target="_blank" rel="noopener noreferrer">
    <button 
    className='bg-[#DD721D] py-2 px-5 rounded-4xl cursor-pointer w-fit font-semibold text-white' >
        {props.message}
    </button>
    </a>
    </>
  )
}

export default Button 
