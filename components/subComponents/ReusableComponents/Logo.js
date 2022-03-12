import React from 'react'

const Logo = ({ firstName, lastName }) => {
  return (
    <>
      <span className="ml-3 text-lg text-white font-bold">
        <span className="border-y-[1px] border-white px-[0.5px]">{firstName}</span>
        <span className="bg-Primary ml-2 px-[3px] font-bold text-white">{lastName}</span>
      </span>
    </>
  )
}

export default Logo;
