import React from 'react'

const Button = (props) => {
  let message = "Hey, I want to know more about the plans...";
  let color = "bg-[#DD721D]"
  let icon = "";
  if(props.color == "#3AA658"){
    color = `bg-[#3AA658]`
    icon = <i className="ri-whatsapp-line text-xl font-normal"></i>;
  }
  if(props.plan){
    message = `Heyy there I just visited your website and am quite interested to subscribe the ₹${props.plan} ${props.name} plan!`;
  }
  return (
    <>
    <a href = {`https://wa.me/6372475659?text=${encodeURIComponent(message)}`} target = "_blank" rel="noopener noreferrer">
    <button 
    className={`${color} py-2 px-5 rounded-4xl gap-2 flex cursor-pointer w-fit font-semibold text-white`} >
        {icon}{props.message}
    </button>
    </a>
    </>
  )
}

export default Button 
