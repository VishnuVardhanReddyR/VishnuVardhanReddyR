import React, { useEffect } from 'react';
import { overview } from "../../lib/Data";

function MyOverview({inView}) {
  return (
    <section className="text-gray-400 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <h2 className={`${inView? `animate-fade-in-right`: ``} sm:text-3xl text-2xl text-gray-300 font-medium title-font mb-2 md:w-2/5`}>
            {overview.header}
          </h2>
        <div className={`${inView? `animate-fade-in-left`: ``} md:w-3/5 md:pl-6`}>
          <p className="leading-relaxed text-base">
            {overview.content}
          </p>
          <div className="bg-black relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6 mt-2 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">NAME</h2>
              <p className="mt-1">Vishnu Vardhan Reddy Rapuru</p>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs lg:mt-2">EMAIL</h2>
              <a href="mailto:vishnurapuru10@gmail.com" className="text-Primary leading-relaxed">vishnurapuru10@gmail.com</a>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">From</h2>
              <p className="leading-relaxed">Hyderabad, India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyOverview;
