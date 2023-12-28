import React, { useEffect } from 'react';
import { useRecoilState } from "recoil";
import { resumeState } from "../../Atoms/resumeAtom";
import useInView from "react-cool-inview";
import ResumeCard from "../subComponents/ResumeComponents/ResumeCard";
import PageTitle from "../subComponents/ReusableComponents/PageTitle";
import { resumeData } from "../../lib/Data";
import { motion } from "framer-motion";

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
      <div id="Resume" className="px-4 pt-8 mt-8" ref={observe}>
        <div className="container flex flex-col items-start mx-auto my-12 md:flex-row md:my-24">
          <div className="sticky top-70% flex flex-col w-full px-8 mt-2 md:top-36 lg:w-1/3 md:mt-12">
            <PageTitle title={'Resume'} sub={'have a brief at my achievements'} />
          </div>
          {/* <section className="text-gray-400 body-font">
            <div className="container flex flex-wrap px-5 py-24 mx-auto">
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
          </section> */}
          <div class="min-h-screen py-6 mx-auto flex flex-col justify-center sm:py-12">
            <div class="py-3 sm:max-w-xl sm:mx-auto w-full px-2 sm:px-0">

              <div class="relative text-gray-700 antialiased text-sm font-semibold">

                <div class="hidden sm:block w-1 bg-blue-300 absolute h-full left-1/2 transform -translate-x-1/2"></div>

                <div class="mt-6 sm:mt-0 sm:mb-12">
                  <div class="flex flex-col sm:flex-row items-center">
                    <div class="flex justify-start w-full mx-auto items-center">
                      <div class="w-full sm:w-1/2 sm:pr-8">
                        <div class="p-4 bg-white rounded shadow">
                          Now this is a story all about how,
                        </div>
                      </div>
                    </div>
                    <div class="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div class="mt-6 sm:mt-0 sm:mb-12">
                  <div class="flex flex-col sm:flex-row items-center">
                    <div class="flex justify-end w-full mx-auto items-center">
                      <div class="w-full sm:w-1/2 sm:pl-8">
                        <div class="p-4 bg-white rounded shadow">
                          My life got flipped turned upside down,
                        </div>
                      </div>
                    </div>
                    <div class="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div class="mt-6 sm:mt-0 sm:mb-12">
                  <div class="flex flex-col sm:flex-row items-center">
                    <div class="flex justify-start w-full mx-auto items-center">
                      <div class="w-full sm:w-1/2 sm:pr-8">
                        <div class="p-4 bg-white rounded shadow">
                          And I'd like to take a minute, just sit right there,
                        </div>
                      </div>
                    </div>
                    <div class="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
                  
                <div class="mt-6 sm:mt-0">
                  <div class="flex flex-col sm:flex-row items-center">
                    <div class="flex justify-end w-full mx-auto items-center">
                      <div class="w-full sm:w-1/2 sm:pl-8">
                        <div class="p-4 bg-white rounded shadow">
                          I'll tell you how I became the Prince of a town called Bel Air.
                        </div>
                      </div>
                    </div>
                    <div class="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                      </svg>
                    </div>
                  </div>
                </div>



              </div>

            </div>
          </div>
        </div>
      </div>
    )
}

export default Resume
