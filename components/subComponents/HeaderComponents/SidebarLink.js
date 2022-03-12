import React from 'react';
import { useRecoilState } from "recoil";
import { sidebarState } from "../../../Atoms/sidebarAtom";

const SidebarLink = () => {
    const [sidebarOpen, setSidebarOpen] = useRecoilState(sidebarState);
    
    return (
        <nav onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden absolute top-4 right-4 w-6 h-6 flex justify-center items-center rounded-full cursor-pointer">
            <span className={`${sidebarOpen? "-rotate-45 mt-[2px] ml-[10px] duration-500" : ""} duration-500 block absolute h-[2px] w-3 bg-white opacity-1 left-0 ml-3`}></span>
            <span className={`${sidebarOpen? "rotate-45 duration-500" : ""} duration-500 block absolute h-[2px] w-6 bg-white opacity-1 left-0 mt-3`}></span>
            <span className={`${sidebarOpen? "-rotate-45 ml-[1px] mb-[2px] duration-500" : ""} duration-500 block absolute h-[2px] w-3 bg-white opacity-1 left-0 mt-6`}></span>
        </nav>
    )
}

export default SidebarLink;
