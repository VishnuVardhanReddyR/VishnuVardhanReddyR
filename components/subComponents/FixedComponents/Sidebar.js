import React from 'react';
import { XIcon, HomeIcon, UserIcon, DocumentReportIcon, BriefcaseIcon, PhoneIcon } from '@heroicons/react/outline';
import { useRecoilState } from "recoil";
import { sidebarState } from "../../../Atoms/sidebarAtom";
import { SocialIcons } from '../../../lib/Data';
import SocialMediaIcon from './SocialMediaIcon';

function Sidebar() {
    const [sidebarOpen, setSidebarOpen] = useRecoilState(sidebarState);

  return (
    <section className={`${sidebarOpen ? "w-full duration-500 ease-in-out" : "w-0"} duration-500 ease-in-out fixed top-0 right-0 h-screen bg-black overflow-hidden z-999`}>
        <div className="container h-1/6 "></div>
            <div className="text-gray-600 items-center justify-center">
                <div className="container py-16 flex">
                    <div className="container w-1/2 md:w-5/6"></div>
                    <div onClick={() => setSidebarOpen(false)} className="flex relative flex-col pb-20 items-center justify-center w-20">
                      <a href="#LandingPage" className="container flex justify-between items-center mb-4 pb-2 group cursor-pointer">
                        <div className="flex-shrink-0 w-8 h-8 bg-gray-700 text-Primary rounded-full inline-flex items-center justify-center">
                          <HomeIcon className="w-6 h-6" />
                        </div>
                        <div className="flex-grow px-6">
                          <h2 className="font-semibold group-hover:text-gray-600 text-gray-300 text-3xl">Home</h2>
                        </div>
                      </a>
                      <a href="#About" className="container flex justify-between items-center mb-4 pb-2 group cursor-pointer">
                        <div className="flex-shrink-0 w-8 h-8 bg-gray-700 text-Primary rounded-full inline-flex items-center justify-center">
                          <UserIcon className="w-6 h-6"/>
                        </div>
                        <div className="flex-grow px-6 ">
                          <h2 className="font-semibold group-hover:text-gray-600 text-gray-300 text-3xl">About</h2>
                        </div>
                      </a>
                      <a href="#Resume" className="container flex justify-between items-center mb-4 pb-2 group cursor-pointer">
                        <div className="flex-shrink-0 w-8 h-8 bg-gray-700 text-Primary rounded-full inline-flex items-center justify-center">
                          <DocumentReportIcon className="w-6 h-6"/>
                        </div>
                        <div className="flex-grow px-6 ">
                          <h2 className="font-semibold group-hover:text-gray-600 text-gray-300 text-3xl">Resume</h2>
                        </div>
                      </a>
                      <a href="#Portfolio" className="container flex justify-between items-center mb-4 pb-2 group cursor-pointer">
                        <div className="flex-shrink-0 w-8 h-8 bg-gray-700 text-Primary rounded-full inline-flex items-center justify-center">
                          <BriefcaseIcon className="w-6 h-6"/>
                        </div>
                        <div className="flex-grow px-6 ">
                          <h2 className="font-semibold group-hover:text-gray-600 text-gray-300 text-3xl">Portfolio</h2>
                        </div>
                      </a>
                      <a href="#Contact" className="container flex justify-between items-center mb-4 pb-2 group cursor-pointer">
                        <div className="flex-shrink-0 w-8 h-8 bg-gray-700 text-Primary rounded-full inline-flex items-center justify-center">
                          <PhoneIcon className="w-6 h-6"/>
                        </div>
                        <div className="flex-grow px-6 ">
                          <h2 className="font-semibold group-hover:text-gray-600 text-gray-300 text-3xl">Contact</h2>
                        </div>
                      </a>
                      <div className="flex ml-24 mt-8 space-x-8">
                        {SocialIcons.map((icon, i) => (
                          <SocialMediaIcon
                            key={icon.name} 
                            name={icon.name} 
                            href={icon.href}
                            img={icon.img}
                          />
                        ))}
                      </div>
                      
                    </div>
                    <div className="container w-3/4"></div>
                </div>
            </div>
    </section>
  )
}

export default Sidebar
