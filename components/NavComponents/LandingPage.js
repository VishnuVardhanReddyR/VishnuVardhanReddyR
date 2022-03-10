import React from 'react';
import useInView from "react-cool-inview";
import IntroPage from "../subComponents/LandingPageComponents/IntroPage";
import ParticlesAnime from "../subComponents/ReusableComponents/Particles";

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
          <ParticlesAnime />
          <IntroPage />
      </div>
    </div>
  )
}

export default LandingPage;
