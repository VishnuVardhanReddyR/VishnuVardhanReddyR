import React, { useEffect } from "react";
import useInView from "react-cool-inview";
import { useRecoilState } from "recoil";
import { aboutState } from "../../Atoms/aboutAtom";
import MyOverview from "../subComponents/AboutComponents/MyOverview";
import MyServices from "../subComponents/AboutComponents/MyServices";
import PageTitle from "../subComponents/ReusableComponents/PageTitle";

function About() {
  const[ aboutOpen, setAboutOpen ] = useRecoilState(aboutState);
  console.log('Sanity Studio is running in the %s API version', process.env.NEXT_PUBLIC_SANITY_DATASET);
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
    <section id="About" ref={observe} className="items-center justify-center h-screen my-auto">
          <PageTitle title={'About Me'} sub={'Get to know me'} />
          <MyOverview inView={inView} />
    </section>
  )
}

export default About;
