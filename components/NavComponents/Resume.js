import React, { useEffect } from 'react';
import { useRecoilState } from "recoil";
import { resumeState } from "../../Atoms/resumeAtom";
import useInView from "react-cool-inview";
import ResumeCard from "../subComponents/ResumeComponents/ResumeCard";
import PageTitle from "../subComponents/ReusableComponents/PageTitle";
import { resumeData } from "../../lib/Data";
import { motion } from "framer-motion";

const Resume = ({resume}) => {
  console.log(resume);
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
      <div id="Resume" className="px-4 pt-8 mt-8">
        <div className="container flex flex-col items-start mx-auto my-12 md:flex-row md:my-24">
          <div className="sticky top-70% flex flex-col w-full px-8 mt-2 md:top-36 lg:w-1/3 md:mt-12 mb-24">
            <PageTitle title={'Resume'} sub={'have a brief at my achievements'} />
          </div>
          <div class="min-h-screen w-3/4 py-6 mx-auto flex flex-col justify-center sm:py-12">
            <div class="py-3 sm:w-full sm:mx-auto w-full px-2 sm:px-4">

              <div class="relative w-full text-gray-500 antialiased text-sm font-semibold">

                <div class="hidden sm:block w-1 bg-gray-600 absolute h-full left-1/2 transform -translate-x-1/2"></div>
                {resume.map((data,i) => (
                <ResumeCard
                  key={data._id}
                  id={i+1}
                  name={data.title}
                  content={data.description} 
                  date={data.date}
                />
              ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    )
}

export default Resume
