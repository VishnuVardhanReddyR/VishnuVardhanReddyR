import React from 'react'

const Logo = ({ firstName, lastName }) => {
  return (
    <span className="ml-3 text-lg text-white font-bold">
        {firstName} 
        <span className="bg-white ml-2 font-bold text-black">{lastName}</span>
    </span>
  )
}

export default Logo;
