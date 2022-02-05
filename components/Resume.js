import React, { useEffect } from 'react';
import Loader from "./Extraas/Loader";
import useInView from "react-cool-inview";
import { useRecoilState } from "recoil";
import { resumeState } from "../Atoms/resumeAtom";

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
    <div id="Resume" className="mt-32 pt-8" ref={observe}>
      <div className="px-8">
          <div className="space-y-6 text-center justify-center">
            <p className="text-gray-400 text-xl">Check out my Resume</p>
            <p className="font-bold text-white text-5xl">Resume</p>
            <Loader />
          </div>
          <div>
          <section className="text-gray-400 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
              <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-700 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-Primary text-white relative z-10 title-font font-medium text-sm">1</div>
                <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div className="flex-shrink-0 w-24 h-24 rounded-full border-2 border-gray-700 inline-flex items-center justify-center">                   
                  <img className="h-12 w-12" src="/university-building.png" alt="" />
                  </div>
                  <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                    <h2 className="font-medium title-font text-gray-300 mb-1 text-xl">Engineering Academics</h2>
                    <p className="leading-relaxed">Joined in Sri Indu College of Engineering and Technology for my Bachelor's of Technology in Computer Science and Engineering</p>
                  </div>
                </div>
              </div>
              <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-700 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-Primary text-white relative z-10 title-font font-medium text-sm">2</div>
                <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div className="flex-shrink-0 w-24 h-24 rounded-full border-2 border-gray-700 inline-flex items-center justify-center">
                  <img className="h-12 w-12" src="/project.png" alt="" />
                  </div>
                  <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                    <h2 className="font-medium title-font text-gray-300 mb-1 text-xl">Projects and Acheivements</h2>
                    <p className="leading-relaxed">During my college years developed a website for our department to store student details. Also got selected for the final round of Telangana State Hackathon. </p>
                  </div>
                </div>
              </div>
              <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-700 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-Primary text-white relative z-10 title-font font-medium text-sm">3</div>
                <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div className="flex-shrink-0 w-24 h-24 rounded-full border-2 border-gray-700 inline-flex items-center justify-center">
                  <img className="h-12 w-12" src="/academic.png" alt="" />
                  </div>
                  <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                    <h2 className="font-medium title-font text-gray-300 mb-1 text-xl">B.Tech Degree</h2>
                    <p className="leading-relaxed">I completed my under-graduation in Computer Science and Engineering during the year 2020.</p>
                  </div>
                </div>
              </div>
              <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
                <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-700 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-Primary text-white relative z-10 title-font font-medium text-sm">4</div>
                <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div className="flex-shrink-0 w-24 h-24 rounded-full border-2 border-gray-700 inline-flex items-center justify-center">
                  <img className="h-12 w-12" src="/freelancer.png" alt="" />
                  </div>
                  <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                    <h2 className="font-medium title-font text-gray-300 mb-1 text-xl">Freelancer</h2>
                    <p className="leading-relaxed">I have started my career as a freelancer and doing many Projects as a Frontend Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          </div>
      </div>
    </div>
  )
}

export default Resume
