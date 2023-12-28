import React from 'react';
import useInView from "react-cool-inview";
import Skill from "./Skill";

function MySkills() {
  const { observe, inView} = useInView({
      threshold: 0.25,
      onChange: ({ observe }) => {
        observe(); 
      },
      onLeave: ({ unobserve }) => {
        unobserve();
      },
    });
  const Skills = [
    { name: 'React.js', percent: 80, anime:'animate-fill-80'},
    { name: 'Next.js', percent: 70, anime:'animate-fill-70'},
    { name: 'Java', percent: 60, anime:'animate-fill-60'},
    { name: 'Photoshop', percent: 50, anime:'animate-fill-50'},
    { name: 'Bash', percent: 60, anime:'animate-fill-60'},
    { name: 'HTML', percent: 90, anime:'animate-fill-90'}
  ]
  return (
    <section ref={observe} className="text-gray-400 body-font">
      <div className="container items-center justify-center mx-auto">
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 xl:flex flex-wrap mt-4`}>
          {Skills.map(skill => (
            <Skill
              key={skill.name}
              name={skill.name}
              percent={skill.percent + '%'}
              anime={skill.anime} 
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default MySkills;
