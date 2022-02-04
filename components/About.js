import Image from "next/image";
import React from "react";
import MyOverview from "./AboutComponents/MyOverview";
import MyServices from "./AboutComponents/MyServices";
import Loader from "./Extraas/Loader";

function About() {
  return (
    <div className="">
        <div className="px-8">
            <div className="space-y-6 text-center justify-center">
                <p className="text-xl text-gray-500 pt-10">Get to know me</p>
                <p className="text-5xl text-white font-bold">About Me</p>
                <Loader />
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
