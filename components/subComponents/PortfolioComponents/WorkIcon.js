import React from 'react';

function WorkIcon({ inView, img, anime, border}) {
  return (
    <div 
        className={`${inView? `${anime}` : ``} 
                sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full border-t-8 
                ${border} border-gray-700 text-indigo-500 flex-shrink-0`}>
            <img className="sm:w-16 sm:h-16 w-10 h-10" src={"/" + img} alt=""/>
    </div>
  )
}

export default WorkIcon;
