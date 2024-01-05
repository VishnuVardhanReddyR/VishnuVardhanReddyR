import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { aboutState } from "../../Atoms/aboutAtom";
import MyOverview from "../subComponents/AboutComponents/MyOverview";
import PageTitle from "../subComponents/ReusableComponents/PageTitle";
import { AboutAuthor } from "../../typings";

type Props = {
  about: AboutAuthor[];
}

function About({ about}: Props) {
  console.log(about);
  const[ aboutOpen, setAboutOpen ] = useRecoilState(aboutState);

  return (
    <section id="About" className="items-center justify-center h-screen my-auto">
          {/* @ts-expect-error async server component */}
          <PageTitle title={'About Me'} sub={'Get to know me'} />
          {/* @ts-expect-error async server component */}
          <MyOverview about={about[0]}/>
    </section>
  )
}

export default About;
