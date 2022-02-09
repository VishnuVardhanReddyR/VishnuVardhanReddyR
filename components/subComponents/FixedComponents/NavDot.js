import React, { useState } from 'react';
import { useRecoilState } from "recoil";
import { sidebarState } from "../../../Atoms/sidebarAtom";

function NavDot({ name, href, open }) {
    const [label, setLabel] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useRecoilState(sidebarState);

  return (
    <div>
        <div className="items-center flex flex-row-reverse" >
            <a
                onMouseOver={() => setLabel(true)} 
                onMouseOut={() => setLabel(false)}   
                href={href} 
                className={`${open? 
                    `bg-Primary scale-125 transition-all duration-150 ease-out` : 
                    `border-2 border-gray-700`}  
                    rounded-full h-4 w-4 ml-4 transition transform duration-300`}></a>
            <span className={`hidden lg:flex font-semibold text-gray-400 
                ${label ? `opacity-1 transition duration-300 ease-in` : `opacity-0`} transition-opacity-10`}>
                {name}
            </span>
            <a 
                href={href}
                onClick={() => setSidebarOpen(false)} 
                className={`font-semibold text-gray-500 
                    ${sidebarOpen? `opacity-1` : `opacity-0 pointer-events-none`} 
                    ${open? `text-Primary scale-125 transition-all duration-150 ease-out` : ``} lg:hidden`}
            >{name}</a>
        </div>  
        {name !== 'Contact' && <div className={`${sidebarOpen? `w-full h-[0.1px] bg-gray-500` : ``} lg:hidden`}></div>}
    </div>
  )
}

export default NavDot;
