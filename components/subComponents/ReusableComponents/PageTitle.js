import React from 'react';
import Loader from "../../loaders/Loader";

function PageTitle({sub, title}) {
  return (
    <div>
        <div className="space-y-6 text-center justify-center">
            <p className="text-gray-500 text-xl pt-10">{sub}</p>
            <p className="font-bold text-white text-5xl">{title}</p>
            <Loader />
        </div>
    </div>
  )
}

export default PageTitle;
