import React from 'react'

function NavDots() {
  return (
    <nav className="lg:mr-24 lg:w-4 fixed left-percentage hidden xl:block z-50">
        <div className="text-white">
          <a href="#home" className="nav-link">Bottle</a>
          <span className="nav-label">Home</span>
        </div>
        <div className="text-white">
          <a href="#about" className="nav-link">Bottle</a>
          <span className="nav-label">About</span>
        </div>
        <div className="text-white">
          <a href="#contact" className="nav-link">Bottle</a>
          <span className="nav-label">get in touch</span>
        </div>
    </nav>
  )
}

export default NavDots
