import React from 'react';
import MapIframe from "./MapIframe";

function MapCard({ mapURL, email, address }) {
  return (
    <div className={`lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative`}>
        <MapIframe mapsrc={mapURL} />
        <div className={`bg-black relative flex md:flex-wrap p-6 rounded shadow-md`}>
            <div className="px-6 lg:w-1/2">
                <h2 className="text-xs font-semibold tracking-widest text-white title-font">ADDRESS</h2>
                <p className="mt-1">{address}</p>
            </div>
            <div className="px-6 mt-4 lg:w-1/2 lg:mt-0">
                <h2 className="text-xs font-semibold tracking-widest text-white title-font">EMAIL</h2>
                <a href={`mailto:${email}`} className="leading-relaxed">{email}</a>
            </div>
        </div>
    </div>
  )
}

export default MapCard;
