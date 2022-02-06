import React, { useState } from 'react'
import { useRecoilValue, useRecoilState } from "recoil";
import { homeState } from "../Atoms/homeAtom";
import { aboutState } from "../Atoms/aboutAtom";
import { resumeState } from "../Atoms/resumeAtom";
import { portfolioState } from "../Atoms/portfolioAtom";
import { contactState } from "../Atoms/contactAtom";
import { sidebarState } from "../Atoms/sidebarAtom";

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
  const [sidebarOpen, setSidebarOpen] = useRecoilState(sidebarState); 

  return (
    <nav className={`p-4 fixed right-0 top-2/4 -translate-y-1/2 space-y-2 ${sidebarOpen ? `bg-black rounded-md border border-gray-900` : ``}`}>
      <div className="items-center flex flex-row-reverse" >
        <a
          onMouseOver={() => setHomeLabel(true)} 
          onMouseOut={() => setHomeLabel(false)}   
          href="#LandingPage" 
          className={`${homeOpen? `bg-Primary scale-125 transition-all duration-150 ease-out` : ` border-2 border-gray-700`} rounded-full h-4 w-4 ml-4 transition transform duration-300`}></a>
        <span className={`hidden lg:flex font-semibold text-gray-400 ${HomeLabel ? `opacity-1 transition duration-300 ease-in` : `opacity-0`} transition-opacity-10`}>Home</span>
        <a 
          href="#LandingPage"
          onClick={() => setSidebarOpen(false)} 
          className={`font-semibold text-gray-500 ${sidebarOpen? `opacity-1` : `opacity-0 pointer-events-none`} ${homeOpen? `text-Primary scale-125 transition-all duration-150 ease-out` : ``} md:hidden`}
        >Home</a>
      </div>  
      <div className={`${sidebarOpen? `w-full h-[0.1px] bg-gray-500` : ``} md:hidden`}></div>
      
      <div className="items-center flex flex-row-reverse">
        <a
          onMouseOver={() => setAboutLabel(true)} 
          onMouseOut={() => setAboutLabel(false)} 
          href="#About" 
          className={` ${aboutOpen? `bg-Primary scale-125 transition-all duration-150 ease-out` : ` border-2 border-gray-700`} rounded-full h-4 w-4 ml-4 transition transform duration-300`}></a>
        <span className={`hidden lg:flex font-semibold text-gray-400 ${AboutLabel ? `opacity-1 transition-opacity duration-300 ease-in` : `opacity-0`} transition-opacity-10`}>About</span>
        <a 
          href="#About"
          onClick={() => setSidebarOpen(false)} 
          className={`font-semibold text-gray-500 ${sidebarOpen? `opacity-1` : `opacity-0 pointer-events-none`} ${aboutOpen? `text-Primary scale-125 transition-all duration-150 ease-out` : ``} md:hidden`}
        >About</a>
      </div>
      <div className={`${sidebarOpen? `w-full h-[0.1px] bg-gray-500` : ``}  md:hidden`}></div>  

      <div className="items-center flex flex-row-reverse">
        <a 
          onMouseOver={() => setResumeLabel(true)} 
          onMouseOut={() => setResumeLabel(false)}
          href="#Resume" 
          className={` ${resumeOpen? `bg-Primary scale-125 transition-all duration-150 ease-out` : ` border-2 border-gray-700`} rounded-full h-4 w-4 ml-4 transition transform duration-300`}></a>
        <span className={`hidden lg:flex font-semibold text-gray-400 ${ResumeLabel ? `opacity-1 transition duration-300 ease-in` : `opacity-0`} transition-opacity-10`}>Resume</span>
        <a 
          href="#Resume"
          onClick={() => setSidebarOpen(false)} 
          className={`font-semibold text-gray-500 ${sidebarOpen? `opacity-1` : `opacity-0 pointer-events-none`} ${resumeOpen? `text-Primary scale-125 transition-all duration-150 ease-out` : ``} md:hidden`}
        >Resume</a>
      </div>
      <div className={`${sidebarOpen? `w-full h-[0.1px] bg-gray-500` : ``}  md:hidden`}></div>  
      
      <div className="items-center flex flex-row-reverse">
        <a 
          onMouseOver={() => setPortfolioLabel(true)} 
          onMouseOut={() => setPortfolioLabel(false)}
          href="#Portfolio" 
          className={`${portfolioOpen? `bg-Primary scale-125 transition-all duration-150 ease-out` : ` border-2 border-gray-700`} rounded-full h-4 w-4 ml-4 transition transform duration-300`}></a>
        <span className={`hidden lg:flex font-semibold text-gray-400 ${PortfolioLabel ? `opacity-1 transition duration-300 ease-in` : `opacity-0`} transition-opacity-10`}>Portfolio</span>
        <a 
          href="#Portfolio"
          onClick={() => setSidebarOpen(false)} 
          className={`font-semibold text-gray-500 ${sidebarOpen? `opacity-1` : `opacity-0 pointer-events-none`} ${portfolioOpen? `text-Primary scale-125 transition-all duration-150 ease-out` : ``} md:hidden`}
        >Portfolio</a>
      </div>
      <div className={`${sidebarOpen? `w-full h-[0.1px] bg-gray-500` : ``}  md:hidden`}></div>  
      
      <div className="items-center flex flex-row-reverse">
        <a 
          onMouseOver={() => setContactLabel(true)} 
          onMouseOut={() => setContactLabel(false)} 
          href="#Contact" 
          className={` ${contactOpen? `bg-Primary scale-125 transition-all duration-150 ease-out` : ` border-2 border-gray-700`} rounded-full h-4 w-4 ml-4 transition transform duration-300`}></a>
        <span className={`hidden lg:flex font-semibold text-gray-400 ${ContactLabel ? `opacity-1 transition duration-300 ease-in` : `opacity-0`} transition duration-300 ease-out`}>Get in Touch</span>
        <a 
          href="#Contact"
          onClick={() => setSidebarOpen(false)} 
          className={`font-semibold text-gray-500 ${sidebarOpen? `opacity-1` : `opacity-0 pointer-events-none`} ${contactOpen? `text-Primary scale-125 transition-all duration-150 ease-out` : ``} md:hidden`}
        >Contact</a>
      </div>
    </nav>
  )
}

export default NavDots;
