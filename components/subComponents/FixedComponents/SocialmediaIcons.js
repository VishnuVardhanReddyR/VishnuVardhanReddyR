import React from 'react';
import { useRecoilState } from "recoil";
import { sidebarState } from "../../../Atoms/sidebarAtom";
import { SocialIcons } from "../../../lib/Data";
import SocialMediaIcon from "./SocialMediaIcon";

function SocialmediaIcons() {
        const [sidebarOpen, setSidebarOpen] = useRecoilState(sidebarState); 
  
        return (
        <div className={`${sidebarOpen ? `flex` : `hidden`} fixed animate-fade-in-right top-1/3 lg:left-6 lg:flex`}>
          <div>
                {SocialIcons.map((icon, i) => (
                        <SocialMediaIcon
                                key={icon.name} 
                                name={icon.name} 
                                href={icon.href}
                                img={icon.img}
                        />
                        // <div key={icon.name} className="mb-4 w-5 h-5 rounded hover:bg-Primary cursor-pointer">
                        //         <a href={icon.href}>
                        //                 <img className="socialmedia-icons" src={`/` + icon.img} alt=""/>
                        //         </a>
                        // </div>        
                ))}
          </div>
        </div>
  );
}

export default SocialmediaIcons
