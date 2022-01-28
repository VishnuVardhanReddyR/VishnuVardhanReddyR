import React from 'react';
import Header from "./LandingPageComponents/Header";
import IntroPage from "./LandingPageComponents/IntroPage";
import SocialmediaIcons from "./LandingPageComponents/SocialmediaIcons";

function LandingPage() {
  return (
    <div>
      <div className="h-screen bg-macblack-m bg-cover bg-fixed bg-no-repeat bg-black lg:bg-macblack md:bg-macblack">
        <IntroPage />
        <SocialmediaIcons />
      </div>
    </div>
  )
}

export default LandingPage
