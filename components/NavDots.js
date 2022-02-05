import React, { useState } from 'react'
import { useRecoilValue } from "recoil";
import { homeState } from "../Atoms/homeAtom";
import { aboutState } from "../Atoms/aboutAtom";
import { resumeState } from "../Atoms/resumeAtom";
import { portfolioState } from "../Atoms/portfolioAtom";
import { contactState } from "../Atoms/contactAtom";

function NavDots() {
  const[HomeLabel, setHomeLabel] = useState(false);
  const[AboutLabel, setAboutLabel] = useState(false);
  const[ResumeLabel, setResumeLabel] = useState(false);
  const[PortfolioLabel, setPortfolioLabel] = useState(false);
  const[ContactLabel, setContactLabel] = useState(false);

  const homeOpen = useRecoilValue(homeState);
  const aboutOpen = useRecoilValue(aboutState);
  const resumeOpen = useRecoilValue(resumeState);
  const portfolioOpen = useRecoilValue(portfolioState);
  const contactOpen = useRecoilValue(contactState);
  return (
    <nav className="p-4 fixed right-0 top-2/4 -translate-y-1/2 space-y-2">
      <div className="items-center flex flex-row-reverse" >
        <a
          onMouseOver={() => setHomeLabel(true)} 
          onMouseOut={() => setHomeLabel(false)}   
          href="#LandingPage" 
          className={` ${homeOpen? `bg-Primary scale-125 transition-all duration-150 ease-out` : ` border-2 border-gray-700`} rounded-full h-4 w-4 ml-4 transition transform duration-300`}></a>
        <span className={`hidden lg:flex font-semibold text-gray-400 ${HomeLabel ? `opacity-1 transition duration-300 ease-in` : `opacity-0`} transition-opacity-10`}>Home</span>
      </div>  

      <div className="items-center flex flex-row-reverse">
        <a
          onMouseOver={() => setAboutLabel(true)} 
          onMouseOut={() => setAboutLabel(false)} 
          href="#About" 
          className={` ${aboutOpen? `bg-Primary scale-125 transition-all duration-150 ease-out` : ` border-2 border-gray-700`} rounded-full h-4 w-4 ml-4 transition transform duration-300`}></a>
        <span className={`hidden lg:flex font-semibold text-gray-400 ${AboutLabel ? `opacity-1 transition-opacity duration-300 ease-in` : `opacity-0`} transition-opacity-10`}>About</span>
      </div>  

      <div className="items-center flex flex-row-reverse">
        <a 
          onMouseOver={() => setResumeLabel(true)} 
          onMouseOut={() => setResumeLabel(false)}
          href="#Resume" 
          className={` ${resumeOpen? `bg-Primary scale-125 transition-all duration-150 ease-out` : ` border-2 border-gray-700`} rounded-full h-4 w-4 ml-4 transition transform duration-300`}></a>
        <span className={`hidden lg:flex font-semibold text-gray-400 ${ResumeLabel ? `opacity-1 transition duration-300 ease-in` : `opacity-0`} transition-opacity-10`}>Resume</span>
      </div>  
      
      <div className="items-center flex flex-row-reverse">
        <a 
          onMouseOver={() => setPortfolioLabel(true)} 
          onMouseOut={() => setPortfolioLabel(false)}
          href="#Portfolio" 
          className={`${portfolioOpen? `bg-Primary scale-125 transition-all duration-150 ease-out` : ` border-2 border-gray-700`} rounded-full h-4 w-4 ml-4 transition transform duration-300`}></a>
        <span className={`hidden lg:flex font-semibold text-gray-400 ${PortfolioLabel ? `opacity-1 transition duration-300 ease-in` : `opacity-0`} transition-opacity-10`}>Portfolio</span>
      </div>  
      
      <div className="items-center flex flex-row-reverse">
        <a 
          onMouseOver={() => setContactLabel(true)} 
          onMouseOut={() => setContactLabel(false)} 
          href="#Contact" 
          className={` ${contactOpen? `bg-Primary scale-125 transition-all duration-150 ease-out` : ` border-2 border-gray-700`} rounded-full h-4 w-4 ml-4 transition transform duration-300`}></a>
        <span className={`hidden lg:flex font-semibold text-gray-400 ${ContactLabel ? `opacity-1 transition duration-300 ease-in` : `opacity-0`} transition duration-300 ease-out`}>Get in Touch</span>
      </div>  
    </nav>
  )
}

export default NavDots
