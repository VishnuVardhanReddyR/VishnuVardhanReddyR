import React, { useEffect } from "react";
import useInView from "react-cool-inview";
import { useRecoilState } from "recoil";
import { aboutState } from "../../Atoms/aboutAtom";
import MyOverview from "../subComponents/AboutComponents/MyOverview";
import MyServices from "../subComponents/AboutComponents/MyServices";
import PageTitle from "../subComponents/ReusableComponents/PageTitle";

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
    <section id="About" ref={observe} className="mt-12 bg-black">
        <div className="px-8">
          <PageTitle title={'About Me'} sub={'Get to know me'} />
          <MyOverview inView={inView} />
          <MyServices inView={inView} />
        </div>
    </section>
  )
}

export default About;
