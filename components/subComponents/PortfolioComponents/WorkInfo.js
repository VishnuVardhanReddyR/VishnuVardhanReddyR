import React from 'react';

function WorkInfo({ inView, anime, name, content, href }) {
  return (
    <div className={`${inView? `${anime}`: ``} flex-grow sm:text-left text-center mt-6 sm:mt-0`}>
        <h2 className="text-gray-300 text-lg title-font font-medium mb-2">{name}</h2>
        <p className="leading-relaxed text-base">{content}</p>
        <a href={href} className="mt-3 text-Primary inline-flex items-center">Visit
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
        </a>
    </div>
  )
}

export default WorkInfo;
