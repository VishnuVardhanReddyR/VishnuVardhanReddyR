import React, { useEffect, useState } from 'react'
import Progress from "../../loaders/Progress";

function Skill({ name, percent }) {
  return (
    <div className="w-full p-4 mx-2 my-2 mb-6 rounded-lg lg:max-w-md sm:mb-0">
      <div className={`container flex justify-between mt-2 font-medium text-gray-300 text-md md:text-xs title-font`}>
        <h2 className="">{name}</h2>
        <span className="justify-between">{percent}</span>
      </div>
      <Progress percent={percent} />
    </div>
  )
}

export default Skill;
