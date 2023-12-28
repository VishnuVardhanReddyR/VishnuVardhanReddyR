import React from 'react';

function ResumeCard({ id, date, name, content}) {
    const side = id % 2 === 0 ? true : false;
  return (
        <div class="mt-6 w-full sm:mt-0 sm:mb-32">
        <div class="flex flex-col sm:flex-row items-center">
        <div class={`flex ${side? 'justify-end': 'justify-start'} w-full mx-auto items-center`}>
            <div class={`w-full sm:w-1/2 ${side? 'sm:pl-16':'sm:pr-16'}`} >
            <div class="p-4 border-2 border-gray-900 rounded shadow">
                <h2 className="text-xl text-gray-300 text-bold">{name}</h2>
                {content}
            </div>
            </div>
        </div>
        <div class="rounded-full bg-gray-800 border-2 border-gray-700 w-28 h-28 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
            <p className="text-lg text-gray-300">{date}</p>
        </div>
        </div>
    </div>
  )
}

export default ResumeCard;
