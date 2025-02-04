import React from 'react';
import WorkIcon from "./WorkIcon";
import WorkInfo from "./WorkInfo";

function Work({ count, name, href, content, img, length}) {
  return (
    <div className="flex flex-row items-center justify-center flex-shrink-0 w-full space-x-16 md:h-1/4 md:p-44 snap-center">
          <WorkIcon img={img} href={href} />
          <WorkInfo name={name} content={content} href={href} count={count} length={length} />
    </div>  
  )
}

export default Work;
