import React from 'react'

const Button = (props) => {
  const message = `Heyy there I just visited your website and am quite interested to subscribe the ₹${props.plan} ${props.name} plan!`;
  let hrefLink = "";
  let target = "";
  if(props.plan){
    hrefLink = `https://wa.me/6372475659?text=${encodeURIComponent(message)}`
    target = "_blank"
  }
  return (
    <>
    <a href = {hrefLink} target={target} rel="noopener noreferrer">
    <button 
    className='bg-[#DD721D] py-2 px-5 rounded-4xl cursor-pointer w-fit font-semibold text-white' >
        {props.message}
    </button>
    </a>
    </>
  )
}

export default Button 
