import React from 'react';
import Loader from "./Extraas/Loader";

function Portfolio() {
  return (
    <div id="Portfolio" className="mt-32 pt-8 px-8">
        <div className="space-y-6 text-center justify-center">
            <p className="text-gray-400 text-xl">Showcasing some of my best work</p>
            <p className="font-bold text-white text-5xl">Portfolio</p>
            <Loader />
        </div>
        <section className="text-gray-400 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-700 sm:flex-row flex-col">
                <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full border-t-8 border-l-2 border-gray-700 text-indigo-500 flex-shrink-0">
                    <img className="sm:w-16 sm:h-16 w-10 h-10" src="/spotify.png" alt=""/>
                </div>
                <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                    <h2 className="text-gray-300 text-lg title-font font-medium mb-2">Spotify Clone</h2>
                    <p className="leading-relaxed text-base">A Web-app which resembles spotify website, and its functionality. Using Next.js framework, and Tailwind css.</p>
                    <a href="https://github.com/VishnuVardhanReddyR/spotify-clone.git" className="mt-3 text-Primary inline-flex items-center">Visit
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                    </a>
                </div>
                </div>
                <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-700 sm:flex-row flex-col">
                <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                    <h2 className="text-gray-300 text-lg title-font font-medium mb-2">Instagram Clone</h2>
                    <p className="leading-relaxed text-base">A Web-app which resembles Instagram web-ui, and its functionality. Using Next.js framework, firebase and Tailwind css.</p>
                    <a href="https://insta-clone-rose-seven.vercel.app/" className="mt-3 text-Primary inline-flex items-center">Visit
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                    </a>
                </div>
                <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full border-t-8 border-r-2 border-gray-700 text-indigo-500 flex-shrink-0">
                <img className="sm:w-16 sm:h-16 w-10 h-10" src="/instagram-logo.png" alt=""/>
                </div>
                </div>
                <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
                <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full border-t-8 border-l-2 border-gray-700 text-indigo-500 flex-shrink-0">
                <img className="sm:w-16 sm:h-16 w-10 h-10" src="/department.png" alt=""/>
                </div>
                <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                    <h2 className="text-gray-300 text-lg title-font font-medium mb-2">Departmental Website</h2>
                    <p className="leading-relaxed text-base">Website build to store student details in a department. Build using Html, css and Php.</p>
                    <a href="https://github.com/VishnuVardhanReddyR/Template-for-student-details-.git" className="mt-3 text-Primary inline-flex items-center">Visit
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                    </a>
                </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Portfolio
