import React from 'react'

function MyServices({inView}) {
  return (
    <section className="text-gray-400 body-font">
      <div className="container px-5 mx-auto">
        <div className="flex flex-col">
          <div className="h-1 bg-gray-900 rounded overflow-hidden">
            <div className="w-48 h-full bg-Primary"></div>
          </div>
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-2">
            <h1 className={`${inView? `animate-fade-in-right`: ``} sm:w-2/5 text-gray-300 font-medium title-font text-2xl sm:mb-0`}>My Services</h1>
          </div>
        </div>
        <div className={`${inView? `animate-fade-in-up`: ``} flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4`}>
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-32 overflow-hidden">
              <img alt="content" className="object-cover object-center h-32 w-32" src="/WebDev.png" />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-300 mt-5">Web Development</h2>
            <p className="text-base leading-relaxed mt-2">
              Web Development using Frontend-frameworks such as React.js and Next.js
            </p>
          </div>
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-32 overflow-hidden">
              <img alt="content" className="object-cover object-center h-32 w-32" src="/responsive.png" />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-300 mt-5">Fully Responsive</h2>
            <p className="text-base leading-relaxed mt-2">
              Websites that are Fully Responsive and compatible with all screen sizes 
            </p>
          </div>
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-32 overflow-hidden">
              <img alt="content" className="object-cover object-center h-32 w-32" src="/photoshop.png" />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-300 mt-5">PSD Design</h2>
            <p className="text-base leading-relaxed mt-2">
              Photshop skills for editing embedded images on a website
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyServices
