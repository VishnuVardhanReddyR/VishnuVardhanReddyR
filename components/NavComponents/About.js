import React, { useEffect } from "react";
import MyOverview from "../subComponents/MyOverview";
import MyServices from "../subComponents/MyServices";
import PageTitle from "../subComponents/PageTitle";
import useInView from "react-cool-inview";
import { useRecoilState } from "recoil";
import { aboutState } from "../../Atoms/aboutAtom";

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
          <PageTitle title={'About Me'} sub={'Get to know me'} />
          <MyOverview inView={inView} />
          <MyServices inView={inView} />
        </div>
    </div>
  )
}

export default About;
