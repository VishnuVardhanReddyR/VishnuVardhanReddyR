import React from 'react';

function Service({ name, inView, anime, img, content }) {
  return (
    <div className={`${inView? `${anime}`: ``} p-4 md:w-1/3 sm:mb-0 mb-6`}>
        <div className="rounded-lg h-32 overflow-hidden">
            <img alt="content" className="object-cover object-center h-32 w-32" src={"/" + img} />
        </div>
        <h2 className="text-xl font-medium title-font text-gray-300 mt-5">{name}</h2>
        <p className="text-base leading-relaxed mt-2">
            {content}
        </p>
    </div>
  )
}

export default Service;
