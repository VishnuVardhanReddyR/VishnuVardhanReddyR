import React from 'react';
import { useRecoilValue } from "recoil";
import { homeState } from "../../../Atoms/homeAtom";
import { aboutState } from "../../../Atoms/aboutAtom";
import { resumeState } from "../../../Atoms/resumeAtom";
import { portfolioState } from "../../../Atoms/portfolioAtom";
import { contactState } from "../../../Atoms/contactAtom";
import { headers } from "../../../lib/Data";
import SidebarLink from "./SidebarLink";
import NavLink from "./NavLink";

const NavLinks = () => {
    const homeOpen = useRecoilValue(homeState);
    const aboutOpen = useRecoilValue(aboutState);
    const resumeOpen = useRecoilValue(resumeState);
    const portfolioOpen = useRecoilValue(portfolioState);
    const contactOpen = useRecoilValue(contactState);
    
    const navs = [...Array(5)].map((_, i) => ({
        ...headers[i],
        id: i,
        name: headers[i].name,
        href: headers[i].href,
        open: 
            (headers[i].name === "HOME" && homeOpen) || 
            (headers[i].name === "ABOUT" && aboutOpen) || 
            (headers[i].name === "RESUME" && resumeOpen) || 
            (headers[i].name === "PORTFOLIO" && portfolioOpen) || 
            (headers[i].name === "CONTACT" && contactOpen)
    }));

  return (
    <>
        <nav className="hidden cursor-pointer text-white lg:flex space-x-12 items-center">
            {navs.map((header, i) => (
                <NavLink
                    key={i}
                    name={header.name}
                    href={header.href}
                    open={header.open} 
                />
            ))}
        </nav>
        <SidebarLink />
    </>
  )
}

export default NavLinks;
