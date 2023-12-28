import React from 'react';

function ResumeCard({ id, inView, img, name, content}) {
  return (
    <div className="relative flex pt-10 pb-20 mx-auto sm:items-center md:w-2/3">
        <div className="absolute inset-0 flex items-center justify-center w-6 h-full">
            <div className="w-1 h-full bg-gray-700 pointer-events-none"></div>
        </div>
        <div className="relative inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mt-10 text-sm font-medium text-white rounded-full sm:mt-0 bg-Primary z-1 title-font">{id}</div>
        <div className={`flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row`}>
            <div className={`flex-shrink-0 ${inView? `animate-[wiggle-left_1s_ease-out]` : ``} w-24 h-24 rounded-full border-2 border-gray-700 inline-flex items-center justify-center`}>                   
                <img className={`h-12 w-12`} src={"/" + img} alt="" />
            </div>
            <div className={`flex-grow ${inView? `animate-[fade-in-left_1s_ease-out]` : ``} sm:pl-6 mt-6 sm:mt-0`}>
                <h2 className="mb-1 text-xl font-medium text-gray-300 title-font">{name}</h2>
                <p className="leading-relaxed">{content}</p>
            </div>
        </div>
    </div>
  )
}

export default ResumeCard;
