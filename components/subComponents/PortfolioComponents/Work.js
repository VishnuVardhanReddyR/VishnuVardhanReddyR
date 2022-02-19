import React from 'react';
import WorkIcon from "./WorkIcon";
import WorkInfo from "./WorkInfo";

function Work({ count, name, href, content, img, swap, length, inView}) {
  return (
    <div className={`flex items-center lg:w-3/5 mx-auto ${count < length ? `border-b` : ``} pb-10 mb-10 border-gray-700 sm:flex-row flex-col`}>
        {!swap ? (
            <>
                <WorkIcon inView={inView} anime={'animate-fade-in-right-2'} img={img} href={href} border={'border-l-2'} />
                <WorkInfo inView={inView} anime={'animate-fade-in-left-2'} name={name} content={content} href={href} />
            </>
        ) : (
            <>
                <WorkInfo inView={inView} anime={'animate-fade-in-right-2'} name={name} content={content} href={href} />
                <WorkIcon inView={inView} anime={'animate-fade-in-left-2'} img={img} href={href} border={'border-r-2'} />
            </> 

        )
        }
    </div>    
  )
}

export default Work;
