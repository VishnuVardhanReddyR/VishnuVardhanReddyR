import React from 'react';
import IntroPage from "../subComponents/IntroPage";
import SocialmediaIcons from "../subComponents/SocialmediaIcons";
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
      <div ref={observe} className="bg-macblack-m bg-cover bg-fixed bg-no-repeat bg-black lg:bg-macblack" id="home">
          <IntroPage />
          <SocialmediaIcons />
      </div>
    </div>
  )
}

export default LandingPage;
