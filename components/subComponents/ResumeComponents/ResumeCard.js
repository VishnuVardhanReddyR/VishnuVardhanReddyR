import React from 'react';

function ResumeCard({ id, date, name, content }) {
    const side = id % 2 === 0 ? true : false;
    return (
        <div class="mt-6 w-full lg:mt-0 lg:mb-16">
            <div class="flex flex-col sm:flex-row items-center">
                <div class={`flex ${side ? 'justify-end' : 'justify-start'} w-full mx-auto items-center`}>
                    <div class={`w-full sm:w-1/2 ${side ? 'lg:pl-16' : 'lg:pr-16'}`} >
                        <div class="p-4 border-2 border-gray-900 rounded shadow">
                            <h2 className="pt-8 text-center text-gray-300 text-md md:text-lg lg:pt-0 lg:text-start text-bold">{name}</h2>
                            {content}
                        </div>
                    </div>
                </div>
                <div class="rounded-full bg-gray-800 border-2 border-gray-700 w-12 h-12 lg:w-28 lg:h-28 absolute left-1/2 -translate-y-4 lg:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                    <p className="text-sm text-gray-300 lg:text-lg">{date}</p>
                </div>
            </div>
        </div>
    )
}

export default ResumeCard;
