import React from 'react';
import { useRecoilState } from "recoil";
import { sidebarState } from "../../../Atoms/sidebarAtom";

const SidebarLink = () => {
    const [sidebarOpen, setSidebarOpen] = useRecoilState(sidebarState);
    
    return (
        <>
            <nav 
                className="lg:hidden" 
                onClick={() => sidebarOpen ? setSidebarOpen(false) : setSidebarOpen(true)}>
                {sidebarOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-white h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    ):(
                    <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 17.5H0.25V14.6667H13V17.5ZM25.75 10.4167H0.25V7.58333H25.75V10.4167ZM25.75 3.33333H13V0.5H25.75V3.33333Z" fill="white" />
                    </svg>
                )}    
            </nav>
        </>
    )
}

export default SidebarLink;
