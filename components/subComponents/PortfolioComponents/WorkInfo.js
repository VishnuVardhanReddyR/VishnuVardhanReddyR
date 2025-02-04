import React from 'react';

function WorkInfo({ name, content, href, count, length }) {
  const nameArr = name.split('#');
  return (
    <div className={`flex-col text-left mx-auto max-w-lg items-center justify-center`}>
        <h2 className="mb-2 text-lg font-medium text-gray-300 title-font">{nameArr[0]}</h2>
        <h2 className="mb-2 text-md font-small text-gray-500 title-font">{nameArr[1]}</h2>
        <p className="text-base leading-relaxed">{content}</p>
    </div>
  )
}

export default WorkInfo;
