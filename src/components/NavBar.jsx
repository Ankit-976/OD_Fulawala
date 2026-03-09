import Button from "./Button";
import { menu } from "../assets/icons/icons";
import { useState } from "react";
import Dropdown from "./Dropdown";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const NavBar = () => {

  const [menuOpen, setmenuOpen] = useState(false)
  const [menuShow, setMenuShow] = useState("flex")

  const toggleDropdown = () => {
    setmenuOpen(!menuOpen)
    if(menuShow == "hidden"){
      setMenuShow("flex")
    }else {
      setMenuShow("hidden")
    }
  }
  
  useGSAP(() => {
    gsap.fromTo(".navBtn",
      { y:3 },
      {
        y:-3,
        duration:1.1,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        repeatRefresh: true
      }
    )
  })

  return (
    <div className="flex lg:px-12 px-5 justify-between fixed top-0 py-2 w-full items-center text-[#2E2E2E] backdrop-blur-md md:bg-white/40 bg-white/70 z-20">
      <a href="/" target="_blank">
      <div
        className="lg:text-[20px] font-semibold"
        style={{ fontFamily: "var(--font-heading)" }}
        >
        OD Fulawala
      </div>
      </a>
      <div className="gap-10 flex items-center font-semibold cursor-pointer">
        <li className="group list-none hidden md:flex flex-col">Home<span className='h-0.5 rounded-4xl w-0 group-hover:w-11 transition-all duration-500 ease-out bg-[#DD721D] block'></span></li>
        <li className="group list-none hidden md:flex flex-col">Plans<span className='h-0.5 rounded-4xl w-0 group-hover:w-[2.35rem] transition-all duration-500 ease-out bg-[#DD721D] block'></span></li>
        <li className="group list-none hidden md:flex flex-col">Contact<span className='h-0.5 rounded-4xl w-0 group-hover:w-14 transition-all duration-500 ease-out bg-[#DD721D] block'></span></li>
        <li className="navBtn will-change-transform list-none hidden md:flex">
          <Button message="Subscribe"/>
        </li>
        <li className={`list-none ${menuShow} md:hidden flex z-20`}>
          <img onClick={toggleDropdown} height="24" width="24" src={menu} /></li>
        {menuOpen && <Dropdown toggle={toggleDropdown}/>}
      </div>
    </div>
  );
};

export default NavBar;