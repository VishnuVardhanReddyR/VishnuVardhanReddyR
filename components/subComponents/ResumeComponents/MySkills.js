import React from 'react';
import Skill from "./Skill";
import { motion } from 'framer-motion';

const MySkills = ({skills}) => {
  return (
    <motion.section 
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="text-gray-400 body-font">
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
    </motion.section>
  )
}

export default MySkills;
