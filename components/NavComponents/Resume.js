import React, { useEffect } from 'react';
import { useRecoilState } from "recoil";
import { resumeState } from "../../Atoms/resumeAtom";
import useInView from "react-cool-inview";
import MySkills from "../subComponents/ResumeComponents/MySkills"; 
import ResumeCard from "../subComponents/ResumeComponents/ResumeCard";
import PageTitle from "../subComponents/ReusableComponents/PageTitle";
import { resumeData } from "../../lib/Data";

function Resume() {
  const [ resumeOpen, setResumeOpen ] = useRecoilState(resumeState);

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
    setResumeOpen(inView);
  },[inView]);

  return (
    <div id="Resume" className="pt-8 mt-8 px-4" ref={observe}>
      <div className="px-8">
        <PageTitle title={'Resume'} sub={'Check out my Resume'} />
        <section className="text-gray-400 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-wrap">
            {resumeData.map((data,i) => (
              <ResumeCard
                key={i}
                id={i+1}
                name={data.name}
                content={data.content}
                img={data.img}
                inView={inView} 
              />
            ))}
          </div>
        </section>
        <MySkills />
      </div>
    </div>
  )
}

export default Resume
