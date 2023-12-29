import React from 'react';

function WorkIcon({ img, href}) {
  return (
    <div 
        className={`sm:w-32 sm:h-32 h-20 w-20 sm:mx-8 inline-flex items-center cursor-pointer justify-center rounded-full border-b-8 border-gray-700 flex-shrink-0`}>
            <a href={href}>
              <img className="w-10 h-10 sm:w-16 sm:h-16" src={"/" + img} alt=""/>
            </a>
    </div>
  )
}

export default WorkIcon;
