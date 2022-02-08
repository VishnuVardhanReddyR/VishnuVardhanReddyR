import React, { useState } from 'react'
import { useRecoilValue, useRecoilState } from "recoil";
import { homeState } from "../../Atoms/homeAtom";
import { aboutState } from "../../Atoms/aboutAtom";
import { resumeState } from "../../Atoms/resumeAtom";
import { portfolioState } from "../../Atoms/portfolioAtom";
import { contactState } from "../../Atoms/contactAtom";
import { sidebarState } from "../../Atoms/sidebarAtom";

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

  const showLabel = (label) => {
    if(label === 'Home'){
      setHomeLabel(true);
    }
    else if(label === 'About'){
      setAboutLabel(true);
    }
    else if(label === 'Resume'){
      setResumeLabel(true);
    }
    else if(label === 'Portfolio'){
      setPortfolioLabel(true);
    }
    else if(label === 'Contact'){
      setContactLabel(true);
    }
  }
  
  const noLabel = (label) => {
    if(label === 'Home'){
      setHomeLabel(false);
    }
    else if(label === 'About'){
      setAboutLabel(false);
    }
    else if(label === 'Resume'){
      setResumeLabel(false);
    }
    else if(label === 'Portfolio'){
      setPortfolioLabel(false);
    }
    else if(label === 'Contact'){
      setContactLabel(false);
    }
  }
  const sideDots = [
    {name: 'Home', open: homeOpen, label: HomeLabel, href: "#LandingPage"},
    {name: 'About', open: aboutOpen, label: AboutLabel, href: "#About"},
    {name: 'Resume', open: resumeOpen, label: ResumeLabel, href: "#Resume"},
    {name: 'Portfolio', open: portfolioOpen, label: PortfolioLabel, href: "#Portfolio"},
    {name: 'Contact', open: contactOpen, label: ContactLabel, href: "#Contact"},
  ]

  return (
    <nav className={`p-4 fixed right-0 top-1/3 space-y-2 
          ${sidebarOpen ? `bg-black rounded-md border border-gray-900 animate-fade-in-left` : `animate-fade-out-right`}`}>
      
      {sideDots.map((dot, i) => (
        <div key={i}>
          <div className="items-center flex flex-row-reverse" >
            <a
              onMouseOver={() => showLabel(dot.name)} 
              onMouseOut={() => noLabel(dot.name)}   
              href={dot.href} 
              className={`${dot.open? `bg-Primary scale-125 transition-all duration-150 ease-out` : ` border-2 border-gray-700`} rounded-full h-4 w-4 ml-4 transition transform duration-300`}></a>
            <span className={`hidden lg:flex font-semibold text-gray-400 
              ${dot.label ? `opacity-1 transition duration-300 ease-in` : `opacity-0`} transition-opacity-10`}>{dot.name}</span>
            <a 
              href={dot.href}
              onClick={() => setSidebarOpen(false)} 
              className={`font-semibold text-gray-500 
                ${sidebarOpen? `opacity-1` : `opacity-0 pointer-events-none`} 
                ${dot.open? `text-Primary scale-125 transition-all duration-150 ease-out` : ``} lg:hidden`}
            >{dot.name}</a>
          </div>  
          {dot.name !== 'Contact' && <div className={`${sidebarOpen? `w-full h-[0.1px] bg-gray-500` : ``} lg:hidden`}></div>}
        </div>
      ))}
    </nav>
  )
}

export default NavDots;
