import React from 'react';
import useInView from "react-cool-inview";
import Skill from "./skill";
import SubPageTitle from "../ReusableComponents/SubPageTitle";

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
        { name: 'React.js', sub:'', percent: '80%', Progress: 'w-4/5', emoji:'', anime:`animate-fill-80`},
        { name: 'Next.js', sub:'', percent: '70%', Progress: 'w-3/4', emoji:'', anime:`animate-fill-70`},
        { name: 'Java', sub:'', percent: '60%', Progress: 'w-3/5', emoji:'', anime:`animate-fill-60`},
        { name: 'Photoshop', sub:'', percent: '50%', Progress: 'w-1/2', emoji:'', anime:`animate-fill-50`},
        { name: 'Bash', sub:'', percent: '60%', Progress: 'w-3/5', emoji:'', anime:`animate-fill-60`},
        { name: 'HTML', sub:'(Programming Language)', percent: '90%', Progress: 'w-11/12', emoji:'😜', anime:`animate-fill-90`}
    ]

  return (
    <section ref={observe} className="text-gray-400 body-font">
      <div className="container px-5 mx-auto">
        <SubPageTitle
          title={'My Skills'}
          inView={inView} 
        />
        <div className={`flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4`}>
          {Skills.map(skill => (
            <Skill
              key={skill.name}
              name={skill.name}
              sub={skill.sub}
              emoji={skill.emoji}
              percent={skill.percent}
              progress={skill.Progress}
              anime={skill.anime} 
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default MySkills
