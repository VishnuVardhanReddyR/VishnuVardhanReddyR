import React from 'react';
import { useRecoilValue} from "recoil";
import { homeState } from "../../../Atoms/homeAtom";
import { aboutState } from "../../../Atoms/aboutAtom";
import { resumeState } from "../../../Atoms/resumeAtom";
import { portfolioState } from "../../../Atoms/portfolioAtom";
import { contactState } from "../../../Atoms/contactAtom";
import NavDot from "./NavDot";

function NavDots() {
  const homeOpen = useRecoilValue(homeState);
  const aboutOpen = useRecoilValue(aboutState);
  const resumeOpen = useRecoilValue(resumeState);
  const portfolioOpen = useRecoilValue(portfolioState);
  const contactOpen = useRecoilValue(contactState);

  const sideDots = [
    {name: 'Home', open: homeOpen, href: "#LandingPage"},
    {name: 'About', open: aboutOpen, href: "#About"},
    {name: 'Resume', open: resumeOpen, href: "#Resume"},
    {name: 'Portfolio', open: portfolioOpen, href: "#Portfolio"},
    {name: 'Contact', open: contactOpen, href: "#Contact"},
  ]

  return (
    <nav className={`p-1 fixed right-0 top-1/3 space-y-4`}>     
      {sideDots.map((dot, i) => (
        <div>
          <NavDot
            key={i}
            href={dot.href}
            open={dot.open}
            name={dot.name}
          />
        </div>
      ))}
    </nav>
  )
}

export default NavDots;
