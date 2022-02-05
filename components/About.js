import Image from "next/image";
import React, { useEffect } from "react";
import MyOverview from "./AboutComponents/MyOverview";
import MyServices from "./AboutComponents/MyServices";
import Loader from "./Extraas/Loader";
import useInView from "react-cool-inview";
import { useRecoilState } from "recoil";
import { aboutState } from "../Atoms/aboutAtom";

function About() {
  const[ aboutOpen, setAboutOpen ] = useRecoilState(aboutState);

  const { observe, inView} = useInView({
    threshold: 0.25,
    onChange: ({ observe }) => {
      observe(); 
    },
    onLeave: ({ unobserve }) => {
      unobserve();
    },
  });

  useEffect(() => {
    setAboutOpen(inView);
  },[inView]);

  return (
    <div id="About" ref={observe} className="mt-12">
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
