import React from 'react';
import MapIframe from "./MapIframe";
import { motion } from 'framer-motion';

function MapCard({ contact }) {
  const { mapURL, email, address, emailLabel, addressLabel } = contact[0];
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }} 
      className={`lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative`}>
        <MapIframe mapsrc={mapURL} />
        <div className={`bg-black relative flex md:flex-wrap p-6 rounded shadow-md`}>
            <div className="px-6 lg:w-1/2">
                <h2 className="text-xs font-semibold tracking-widest text-white title-font">{addressLabel}</h2>
                <p className="mt-1">{address}</p>
            </div>
            <div className="px-6 mt-4 lg:w-1/2 lg:mt-0">
                <h2 className="text-xs font-semibold tracking-widest text-white title-font">{emailLabel}</h2>
                <a href={`mailto:${email}`} className="leading-relaxed">{email}</a>
            </div>
        </div>
    </motion.div>
  )
}

export default MapCard;
