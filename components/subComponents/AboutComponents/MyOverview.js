import React, { useEffect } from 'react';
import { overview } from "../../../lib/Data";
import { motion } from 'framer-motion';
import Image from 'next/image';

function MyOverview({image, title, description,name, email, address}) {
  
  return (
    <section className="text-gray-400 bg-black body-font">
      <div className="flex flex-col items-center justify-center px-5 py-24 mx-auto lg:flex-row">
          <div
           className="relative w-48 h-48 overflow-hidden rounded-full lg:w-96 lg:h-96 contrast-200 grayscale">
            <Image src={image} alt="Picture of the author" layout="fill" />
          </div>
        <div className="mt-8 ml-8 md:w-3/5 md:pl-6">
          <h1 className="mb-4 text-lg tracking-[2px] font-medium text-center text-white md:text-3xl title-font sm:text-4xl lg:text-start">{title}</h1>
          <p className="text-lg text-center lg:text-start">
            {description}
          </p>
          <div className="relative flex flex-col py-6 bg-black rounded shadow-md md:flex-wrap">
            <div className="space-y-4 lg:w-1/2 lg:mt-0">
              <h2 className="text-xs font-semibold tracking-widest text-white title-font">NAME</h2>
              <p className="mt-1">{name}</p>
              <h2 className="text-xs font-semibold tracking-widest text-white title-font lg:mt-2">EMAIL</h2>
              <a href={`mailto:${email}`} className="leading-relaxed text-Primary">{email}</a>
            </div>
            <div className="mt-4 lg:w-1/2 lg:mt-0">
              <h2 className="text-xs font-semibold tracking-widest text-white title-font">From</h2>
              <p className="leading-relaxed">{address}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyOverview;
