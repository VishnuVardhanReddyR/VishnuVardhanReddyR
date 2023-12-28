import React, { useEffect } from 'react';
import { overview } from "../../../lib/Data";
import { motion } from 'framer-motion';
import Image from 'next/image';

function MyOverview({inView}) {
  let name = "Vishnu Vardhan Reddy Rapuru";
  let email = "vishnurapuru10@gmail.com";
  let address = "Hyderabad, India";
  return (
    <section className="text-gray-400 bg-black body-font">
      <div className="flex flex-col items-center justify-center px-5 py-24 mx-auto lg:flex-row">
          <div
           className="relative w-48 h-48 overflow-hidden rounded-full lg:w-96 lg:h-96 contrast-200 grayscale">
            <Image src="https://media.licdn.com/dms/image/D5635AQEiyCm1aLd5bw/profile-framedphoto-shrink_400_400/0/1692832239716?e=1704164400&v=beta&t=Z6SHyZfxbppWOlED4WoWolzCGWdp1Bg0d3YQ8zJ6WGo" alt="Picture of the author" layout="fill" />
          </div>
        <div className="mt-8 ml-8 md:w-3/5 md:pl-6">
          <h1 className="mb-4 text-3xl font-medium text-center text-white title-font sm:text-4xl lg:text-start">{overview.header}</h1>
          <p className="text-lg text-center lg:text-start">
            {overview.content}
          </p>
          <div className="relative flex flex-wrap py-6 bg-black rounded shadow-md">
            <div className=" lg:w-1/2 lg:mt-0">
              <h2 className="text-xs font-semibold tracking-widest text-white title-font">NAME</h2>
              <p className="mt-1">{name}</p>
              <h2 className="text-xs font-semibold tracking-widest text-white title-font lg:mt-2">EMAIL</h2>
              <a href="mailto:vishnurapuru10@gmail.com" className="leading-relaxed text-Primary">{email}</a>
            </div>
            <div className="px-6 mt-4 lg:w-1/2 lg:mt-0">
              <h2 className="text-xs font-semibold tracking-widest text-white title-font">From</h2>
              <p className="leading-relaxed">Hyderabad, India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyOverview;
