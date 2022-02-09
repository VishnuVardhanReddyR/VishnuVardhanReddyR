import React from 'react';
import useInView from "react-cool-inview";
import Service from "./Service";
import SubPageTitle from "../ReusableComponents/SubPageTitle";

function MyServices() {
  const services = [
    {
        name: 'Web Development', 
        img:'WebDev.png',
        content: 'Web Development using Frontend-frameworks such as React.js and Next.js',
        anime:`animate-fade-in-up`
      },
      {
        name: 'Fully Responsive', 
        img:'responsive.png',
        content: 'Websites that are Fully Responsive and compatible with all screen sizes',
        anime:`animate-fade-in-up-1`
      },
      {
        name: 'PSD Design', 
        img:'photoshop.png',
        content: 'Photshop skills for editing embedded images on a website',
        anime: `animate-fade-in-up-2`
      },
  ]
 
  const { observe, inView} = useInView({
    threshold: 0.25,
    onChange: ({ observe }) => {
      observe(); 
    },
    onLeave: ({ unobserve }) => {
      unobserve();
    },
  });
  
  return (
    <section ref={observe} className="text-gray-400 body-font">
      <div className="container px-5 mx-auto">
        <SubPageTitle
          title={'My Services'}
          inView={inView} 
        />
        <div className={`flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4`}>
          {services.map(service =>(
            <Service
              key={service.name}
              inView={inView}
              anime={service.anime}
              img={service.img}
              content={service.content} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default MyServices;