import React from 'react';
import Skill from "./Skill";

const MySkills = ({skills}) => {
  return (
    <section className="text-gray-400 body-font">
      <div className="container items-center justify-center mx-auto">
        <div className="grid grid-cols-2 mt-4 space-x-2 lg:grid-cols-3">
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
