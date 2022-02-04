import React from 'react';
import IntroPage from "./LandingPageComponents/IntroPage";
import SocialmediaIcons from "./LandingPageComponents/SocialmediaIcons";

function LandingPage() {
  return (
    <div id="LandingPage">
      <div className="bg-macblack-m bg-cover bg-fixed bg-no-repeat bg-black md:bg-macblack" id="home">
          <IntroPage />
          <SocialmediaIcons />
      </div>
    </div>
  )
}

export default LandingPage;
