import React from 'react';

function WorkIcon({ inView, img, anime, border, href}) {
  return (
    <div 
        className={`${inView? `${anime}` : ``} 
                sm:w-32 sm:h-32 h-20 w-20 sm:mx-8 inline-flex opacity-100 items-center cursor-pointer justify-center rounded-full border-t-8 
                ${border} border-gray-700 flex-shrink-0 hover:opacity-70`}>
            <a href={href}>
              <img className="sm:w-16 sm:h-16 w-10 h-10" src={"/" + img} alt=""/>
            </a>
    </div>
  )
}

export default WorkIcon;
