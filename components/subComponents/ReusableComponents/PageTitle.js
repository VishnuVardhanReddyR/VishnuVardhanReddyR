import React from 'react';
import Loader from "../../loaders/Loader";

function PageTitle({sub, title}) {
  return (
        <div className="mt-32 space-y-6 text-center">
            <p className="hidden pt-10 text-xl text-gray-500 lg:block">{sub}</p>
            <p className="text-md uppercase text-gray-300 tracking-[8px]">{title}</p>
            <Loader />
        </div>
  )
}

export default PageTitle;
