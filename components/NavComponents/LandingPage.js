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
    <section ref={observe} className="bg-macblack-m bg-cover bg-fixed bg-no-repeat lg:bg-macblack top-1/2 left-1/2" id="home">
      <div className="container relative">
        <ParticlesAnime />
        <IntroPage />
      </div>
    </section>
  )
}

export default LandingPage;
