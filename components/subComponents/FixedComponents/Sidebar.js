// import React from 'react';
// import { useRecoilValue, useRecoilState } from "recoil";
// import { homeState } from "../Atoms/homeAtom";
// import { aboutState } from "../Atoms/aboutAtom";
// import { resumeState } from "../Atoms/resumeAtom";
// import { portfolioState } from "../Atoms/portfolioAtom";
// import { contactState } from "../Atoms/contactAtom";
// import { sidebarState } from "../Atoms/sidebarAtom";

// function Sidebar() {
//     const homeOpen = useRecoilValue(homeState);
//     const aboutOpen = useRecoilValue(aboutState);
//     const resumeOpen = useRecoilValue(resumeState);
//     const portfolioOpen = useRecoilValue(portfolioState);
//     const contactOpen = useRecoilValue(contactState);
//     const [sidebarOpen, setSidebarOpen] = useRecoilState(sidebarState); 
    
//     const panel = () => {
//         sidebarOpen ? setSidebarOpen(false) : setSidebarOpen(true);
//     }
//   return (
//     <nav onClick={panel} className={`hidden p-6 fixed right-0 top-1/3 space-y-2 ${sidebarOpen ? `bg-black rounded-md border border-gray-900 animate-fade-in-left` : `animate-fade-in-right`}`}>
//       <div className="items-center flex flex-row-reverse" >
//         <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${sidebarOpen? `opacity-1` : `opacity-0 pointer-events-none`} ${homeOpen? `text-Primary scale-125 transition-all duration-150 ease-out` : ``}`} viewBox="0 0 20 20" fill="currentColor">
//             <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
//         </svg>
//         <a 
//           href="#LandingPage"
//           onClick={() => setSidebarOpen(false)} 
//           className={`font-semibold text-gray-500 ${sidebarOpen? `opacity-1` : `opacity-0 pointer-events-none`} ${homeOpen? `text-Primary scale-125 transition-all duration-150 ease-out` : ``} lg:hidden`}
//         >Home
//         </a>
//       </div>  
//       <div className={`${sidebarOpen? `w-full h-[0.1px] bg-gray-500` : ``} lg:hidden`}></div>
      
//       <div className="items-center flex flex-row-reverse">
//         <a 
//           href="#About"
//           onClick={() => setSidebarOpen(false)} 
//           className={`font-semibold text-gray-500 ${sidebarOpen? `opacity-1` : `opacity-0 pointer-events-none`} ${aboutOpen? `text-Primary scale-125 transition-all duration-150 ease-out` : ``} lg:hidden`}
//         >About</a>
//       </div>
//       <div className={`${sidebarOpen? `w-full h-[0.1px] bg-gray-500` : ``}  lg:hidden`}></div>  

//       <div className="items-center flex flex-row-reverse">
//         <a 
//           href="#Resume"
//           onClick={() => setSidebarOpen(false)} 
//           className={`font-semibold text-gray-500 ${sidebarOpen? `opacity-1` : `opacity-0 pointer-events-none`} ${resumeOpen? `text-Primary scale-125 transition-all duration-150 ease-out` : ``} lg:hidden`}
//         >Resume</a>
//       </div>
//       <div className={`${sidebarOpen? `w-full h-[0.1px] bg-gray-500` : ``}  lg:hidden`}></div>  
      
//       <div className="items-center flex flex-row-reverse">
//         <a 
//           href="#Portfolio"
//           onClick={() => setSidebarOpen(false)} 
//           className={`font-semibold text-gray-500 ${sidebarOpen? `opacity-1` : `opacity-0 pointer-events-none`} ${portfolioOpen? `text-Primary scale-125 transition-all duration-150 ease-out` : ``} lg:hidden`}
//         >Portfolio</a>
//       </div>
//       <div className={`${sidebarOpen? `w-full h-[0.1px] bg-gray-500` : ``}  lg:hidden`}></div>  
      
//       <div className="items-center flex flex-row-reverse">
//         <a 
//           href="#Contact"
//           onClick={() => setSidebarOpen(false)} 
//           className={`font-semibold text-gray-500 ${sidebarOpen? `opacity-1` : `opacity-0 pointer-events-none`} ${contactOpen? `text-Primary scale-125 transition-all duration-150 ease-out` : ``} lg:hidden`}
//         >Contact</a>
//       </div>
//     </nav>
//   )
// }

// export default Sidebar
