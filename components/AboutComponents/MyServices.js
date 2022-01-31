import React from 'react'

function MyServices() {
  return (
    <div>
      <div className="bg-black h-full">
          <p className="text-2xl text-white font-bold border-b border-gray-700 mb-4 text-line">My Services</p>
          <div className="grid grid-cols-1 lg:grid-cols-3"> 
            <div className="grid grid-cols-1 py-10 px-4 rounded-lg shadow-lg border-r-2 border-x-gray-500">
                <img className="w-10 lg:w-28" src="/WebDev.png" alt="" />
                <p className="mt-8 text-2xl font-bold text-gray-400"> Web Development</p>
                <p className="mt-2 text-sm text-gray-500">Websites using frontend frameworks like reactjs, nextjs.</p>
            </div>
            <div className="grid grid-cols-1 py-10 px-4 rounded-lg shadow-lg border-r-2 border-x-gray-500">
                <img className="w-10 lg:w-28" src="/responsive.png" alt="" />
                <p className="mt-8 text-2xl font-bold text-gray-400"> Fully Responsive</p>
                <p className="mt-2 text-sm text-gray-500">Websites that are comapatible in all kinds of screens.</p>
            </div>
            <div className="grid grid-cols-1 py-10 px-4 rounded-lg shadow-lg">
                <img className="w-10 lg:w-28" src="photoshop.png" alt="" />
                <p className="mt-8 text-2xl font-bold text-gray-400"> PSD design</p>
                <p className="mt-2 text-sm text-gray-500">Photoshop skills to edit the images shown in the website.</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default MyServices
