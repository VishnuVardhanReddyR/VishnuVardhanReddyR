import React from 'react';
import useInView from "react-cool-inview";
import Service from "./Service";
import SubPageTitle from "../ReusableComponents/SubPageTitle";
import { services } from "../../../lib/Data";

function MyServices() {
 
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