import React, { useEffect, useState } from 'react'
import Progress from "../../loaders/Progress";

function Skill({ name, sub, emoji, percent, progress, anime, inView }) {
    const [view, setView] = useState(false);
    useEffect(() => {
        setView(inView);
    },[inView]);
  
    return (
    <div className={`p-4 w-full md:w-1/2 sm:mb-0 mb-6`}>
        <div className={`container flex justify-between mt-2`}>
            <h2 className="text-xl font-medium title-font text-gray-300">
                {name} {sub && <span className="line-through text-sm">{sub}</span>}
                {emoji}</h2>
            <span className="justify-between font-semibold text-gray-200">{percent}</span>
        </div>
        <Progress progress={progress} inView={view} anime={anime} />
    </div>
  )
}

export default Skill;
