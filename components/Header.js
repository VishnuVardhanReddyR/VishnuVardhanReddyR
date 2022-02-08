import Image from "next/image";
import { useRecoilValue, useRecoilState } from "recoil";
import { homeState } from "../Atoms/homeAtom";
import { aboutState } from "../Atoms/aboutAtom";
import { resumeState } from "../Atoms/resumeAtom";
import { portfolioState } from "../Atoms/portfolioAtom";
import { contactState } from "../Atoms/contactAtom";
import { sidebarState } from "../Atoms/sidebarAtom";

function Header() {
    const homeOpen = useRecoilValue(homeState);
    const aboutOpen = useRecoilValue(aboutState);
    const resumeOpen = useRecoilValue(resumeState);
    const portfolioOpen = useRecoilValue(portfolioState);
    const contactOpen = useRecoilValue(contactState);
    const [sidebarOpen, setSidebarOpen] = useRecoilState(sidebarState); 

    const headers = [
        { name: 'Home', href: '#LandingPage', open: homeOpen },
        { name: 'About', href: '#About', open: aboutOpen},
        { name: 'Resume', href: '#Resume', open: resumeOpen },
        { name: 'Portfolio', href: '#Portfolio', open: portfolioOpen },
        { name: 'Contact', href: '#Contact', open: contactOpen },
    ]

    return (
        <header className="py-6 bg-black z-50 top-0 sticky">
            <div className="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
                <span className="ml-3 text-lg text-white font-bold">
                    Vishnu 
                    <span className="bg-white ml-2 font-bold text-black">Rapuru</span>
                </span>
                <nav className="hidden cursor-pointer text-white lg:flex space-x-12 items-center">
                    {headers.map((header, i) => (
                        <a 
                            key={i}
                            href={header.href} 
                            className={`${header.open ? 'text-Primary-hover font-bold scale-125' : ''} mr-5 hover:border-b border-white`}
                        >
                            {header.name}
                        </a>
                    ))}
                </nav>
                <nav className={`lg:hidden ${sidebarOpen ? `hidden` : `flex`}`} onClick={() => sidebarOpen ? setSidebarOpen(false) : setSidebarOpen(true)}>
                    <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 17.5H0.25V14.6667H13V17.5ZM25.75 10.4167H0.25V7.58333H25.75V10.4167ZM25.75 3.33333H13V0.5H25.75V3.33333Z" fill="white"/>
                    </svg>
                </nav>
                <nav className={`text-white lg:hidden ${sidebarOpen ? `flex` : `hidden`}`} onClick={() => sidebarOpen ? setSidebarOpen(false) : setSidebarOpen(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-white h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 18L18 6M6 6l12 12" />
                    </svg>  
                </nav>
            </div>
      </header>
    );
}

export default Header;
