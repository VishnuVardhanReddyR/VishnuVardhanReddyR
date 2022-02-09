import React from 'react';

function SubPageTitle({ title, inView }) {
  return (
    <div className="flex flex-col">
        <div className="h-1 bg-gray-900 rounded overflow-hidden">
            <div className="w-48 h-full bg-Primary"></div>
        </div>
        <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-2">
            <h1 
                className={`${inView? `animate-fade-in-right`: ``} 
                    sm:w-2/5 text-gray-300 font-medium title-font text-2xl sm:mb-0`}>
                {title}
            </h1>
        </div>
    </div>
  )
}

export default SubPageTitle;
