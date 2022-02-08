import React from 'react';
import useInView from "react-cool-inview";
import Progress from '../loaders/Progress';

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
        <div className="flex flex-col">
          <div className="h-1 bg-gray-900 rounded overflow-hidden">
            <div className="w-32 h-full bg-Primary"></div>
          </div>
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-2">
            <h1 className={`${inView? `animate-fade-in-right`: ``} sm:w-2/5 text-gray-300 font-medium title-font text-2xl sm:mb-0`}>My Skills</h1>
          </div>
        </div>
        <div className={`flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4`}>
            {Skills.map(skill => (
                <div key={skill.name} className={`p-4 w-full md:w-1/2 sm:mb-0 mb-6`}>
                    <div className={`container flex justify-between mt-2`}>
                        <h2 className="text-xl font-medium title-font text-gray-300">
                            {skill.name} {skill.sub && <span className="line-through text-sm">{skill.sub}</span>}
                            {skill.emoji}</h2>
                        <span className="justify-between font-semibold text-gray-200">{skill.percent}</span>
                    </div>
                    <Progress progress={skill.Progress} inView={inView} anime={skill.anime} />
                </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default MySkills
