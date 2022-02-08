import React from 'react'

function Progress({ progress, inView, anime }) {
  return (
    <div>
        <div className={`h-3 bg-gray-800 rounded overflow-hidden mt-2 w-full`}>
            <div className={`h-full ${progress} ${inView? `${anime}`: ``} bg-Primary`}></div>
        </div>
    </div>
  )
}

export default Progress
