import React from 'react';
import Header from "./LandingPageComponents/Header";
import IntroPage from "./LandingPageComponents/IntroPage";
import SocialmediaIcons from "./LandingPageComponents/SocialmediaIcons";
import NavDots from "./LandingPageComponents/NavDots";

function LandingPage() {
  return (
    <div className="sticky flex-col mb-0 z-9 bg-macblack-m bg-cover bg-fixed bg-no-repeat bg-black md:bg-macblack">
        <IntroPage />
        <SocialmediaIcons />
        <NavDots />
    </div>
  )
}

export default LandingPage
