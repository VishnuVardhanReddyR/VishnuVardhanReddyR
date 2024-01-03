import React from 'react';

function WorkIcon({ img, href}) {
  return (
    <div 
        className={` inline-flex items-center cursor-pointer justify-center rounded-full border-b-8 border-gray-700`}>
            <a href={href}>
              <img className="w-48 h-48 rounded-full" src={img} alt=""/>
            </a>
    </div>
  )
}

export default WorkIcon;
