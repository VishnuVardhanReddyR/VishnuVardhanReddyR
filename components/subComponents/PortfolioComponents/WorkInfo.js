import React from 'react';

function WorkInfo({ name, content, href, count, length }) {
  return (
    <div className={`flex-col text-center mx-auto max-w-md items-center justify-center`}>
        <h2 className="mb-2 text-lg font-medium text-gray-300 title-font">{name}</h2>
        <p className="text-base leading-relaxed">{content}</p>
        <p className="mt-2 text-sm font-medium text-gray-400 title-font">{count}/{length}</p>
    </div>
  )
}

export default WorkInfo;
