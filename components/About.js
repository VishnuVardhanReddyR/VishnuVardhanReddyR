import Image from "next/image";
import React from "react";
import MyOverview from "./AboutComponents/MyOverview";
import MyServices from "./AboutComponents/MyServices";

function About() {
  return (
    <div className="bg-black">
        <div className="px-4 pt-12">
            <div className="space-y-4 text-center justify-center mt-2">
                <p className="text-sm text-gray-500 pt-10">Get to know me</p>
                <p className="text-xl text-white font-semibold">About Me</p>
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
