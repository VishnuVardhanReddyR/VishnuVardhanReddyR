import React from 'react';
import IntroPage from "./LandingPageComponents/IntroPage";
import SocialmediaIcons from "./LandingPageComponents/SocialmediaIcons";
import useInView from "react-cool-inview";

function LandingPage() {
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
    <div>
      <div ref={observe} inview className="bg-macblack-m bg-cover bg-fixed bg-no-repeat bg-black lg:bg-macblack" id="home">
          <IntroPage />
          {
            {inView} &&
            <SocialmediaIcons />
          }
      </div>
    </div>
  )
}

export default LandingPage;
