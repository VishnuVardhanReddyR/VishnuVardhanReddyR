import React from 'react';
import WorkIcon from "./WorkIcon";
import WorkInfo from "./WorkInfo";

function Work({ count, name, href, content, img, swap, animeLeft, animeRight, length, inView}) {
  return (
    <div className={`flex items-center lg:w-3/5 mx-auto ${count < length ? `border-b` : ``} pb-10 mb-10 border-gray-700 sm:flex-row flex-col`}>
        {!swap ? (
            <>
                <WorkIcon inView={inView} anime={animeRight} img={img} border={'border-l-2'} />
                <WorkInfo inView={inView} anime={animeLeft} name={name} content={content} href={href} />
            </>
        ) : (
            <>
                <WorkInfo inView={inView} anime={animeRight} name={name} content={content} href={href} />
                <WorkIcon inView={inView} anime={animeLeft} img={img} border={'border-r-2'} />
            </> 

        )
        }
    </div>    
  )
}

export default Work;
