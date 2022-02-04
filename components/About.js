import Image from "next/image";
import React from "react";
import MyOverview from "./AboutComponents/MyOverview";
import MyServices from "./AboutComponents/MyServices";
import Loader from "./Extraas/Loader";

function About() {
  return (
    <div className="bg-black">
        <div className="px-4 ">
            <div className="space-y-4 text-center justify-center">
                <p className="text-sm text-gray-500 pt-10">Get to know me</p>
                <Loader />
                <p className="text-3xl text-white font-semibold">About Me</p>
            </div>
            <div>
              <MyOverview />
              <MyServices />
            </div>
        </div>
    </div>
  )
}

export default About;
