import React, { useEffect, useState } from 'react'
import Progress from "../../loaders/Progress";

function Skill({ name, percent, inView }) {
    const [view, setView] = useState(false);
    useEffect(() => {
        setView(inView);
    },[inView]);
  
    return (
    <div className={`p-4 w-full xl:max-w-md border-gray-900 border my-2 mx-2 rounded-lg sm:mb-0 mb-6`}>
        <div className={`container flex justify-between mt-2`}>
            <h2 className="text-xl font-medium text-gray-300 title-font">{name}</h2>
            <span className="justify-between font-semibold text-gray-200">{percent}</span>
        </div>
        <Progress percent={percent} view={inView}/>
    </div>
  )
}

export default Skill;
