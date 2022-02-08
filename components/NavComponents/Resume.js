import React, { useEffect } from 'react';
import useInView from "react-cool-inview";
import { useRecoilState } from "recoil";
import { resumeState } from "../../Atoms/resumeAtom";
import MySkills from "../subComponents/MySkills"; 
import PageTitle from "../subComponents/PageTitle";
import ResumeCard from "../subComponents/ResumeCard";

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

  const resumeData = [
    { 
      name: 'Engineering Academics', 
      content: "Joined in Sri Indu College of Engineering and Technology for my Bachelor's of Technology in Computer Science and Engineering.",
      img: 'university-building.png',
      anime: `animate-fade-in-left`,
      no: '1'
    },
    { 
      name: 'Projects and Acheivements', 
      content: "During my college years developed a website for our department to store student details. Also got selected for the final round of Telangana State Hackathon.",
      img: 'project.png',
      anime: `animate-fade-in-left-1`,
      no: '2'
    },
    { 
      name: 'B.Tech Degree', 
      content: "I completed my under-graduation in Computer Science and Engineering during the year 2020.",
      img: 'academic.png',
      anime: `animate-fade-in-left-2`,
      no: '3'
    },
    { 
      name: 'Freelancer', 
      content: "I have started my career as a freelancer and doing many Projects as a Frontend Developer.",
      img: 'freelancer.png',
      anime: `animate-fade-in-left-3`,
      no: '4'
    }
  ]
  return (
    <div id="Resume" className="pt-8 mt-8 px-4" ref={observe}>
      <div className="px-8">
          <PageTitle title={'Resume'} sub={'Check out my Resume'} />
          <div>
          <section className="text-gray-400 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap">

              {resumeData.map(data => (
                <ResumeCard
                  key={data.no}
                  id={data.no}
                  name={data.name}
                  content={data.content}
                  anime={data.anime}
                  img={data.img}
                  inView={inView} 
                />
              ))}
            </div>
          </section>
          </div>
          <MySkills />
      </div>
    </div>
  )
}

export default Resume
