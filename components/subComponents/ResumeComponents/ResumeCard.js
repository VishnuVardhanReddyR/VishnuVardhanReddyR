import React from 'react';

function ResumeCard({ id, inView, anime, img, name, content}) {
  return (
    <div key={id} className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-700 pointer-events-none"></div>
        </div>
        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-Primary text-white relative z-10 title-font font-medium text-sm">{id}</div>
        <div className={`flex-grow ${inView? `${anime}` : ``} md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row`}>
            <div className="flex-shrink-0 w-24 h-24 rounded-full border-2 border-gray-700 inline-flex items-center justify-center">                   
                <img className={`h-12 w-12`} src={"/" + img} alt="" />
            </div>
            <div className={`flex-grow sm:pl-6 mt-6 sm:mt-0`}>
                <h2 className="font-medium title-font text-gray-300 mb-1 text-xl">{name}</h2>
                <p className="leading-relaxed">{content}</p>
            </div>
        </div>
    </div>
  )
}

export default ResumeCard;
