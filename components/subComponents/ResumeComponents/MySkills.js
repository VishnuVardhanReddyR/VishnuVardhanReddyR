import React from 'react';
import Skill from "./Skill";

const MySkills = ({skills}) => {
  return (
    <section className="text-gray-400 body-font">
      <div className="container items-center justify-center mx-auto">
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 xl:flex flex-wrap mt-4`}>
          {skills.map(skill => (
            <Skill
              key={skill._id}
              name={skill.title}
              percent={skill.percentage + '%'}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default MySkills;
