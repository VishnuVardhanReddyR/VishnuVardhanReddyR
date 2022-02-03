import React from 'react';
import Header from "./LandingPageComponents/Header";
import IntroPage from "./LandingPageComponents/IntroPage";
import SocialmediaIcons from "./LandingPageComponents/SocialmediaIcons";

function LandingPage() {
  return (
    <div className="bg-macblack-m bg-cover bg-fixed bg-no-repeat bg-black md:bg-macblack" id="home">
        <IntroPage />
        <SocialmediaIcons />
    </div>
  )
}

export default LandingPage;
