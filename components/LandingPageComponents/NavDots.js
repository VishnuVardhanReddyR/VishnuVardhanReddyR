import React from 'react'

function NavDots() {
  return (
    <nav className="lg:mr-24 lg:w-4 fixed left-percentage hidden xl:block text-white">
        <div className="absolute right-48 transform translate-x-1/2 space-y-6 mt-36">
            <a href="#" className="nav-dot selected-circle block w-7 h-7 rounded-full border-4 border-nav bg-Primary">
                <span className="bg-black px-2 py-1 rounded-md mr-10">Home</span>
            </a>
        </div>
    </nav>
  )
}

export default NavDots
