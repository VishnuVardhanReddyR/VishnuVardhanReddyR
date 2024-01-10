import React from 'react'
import Course from './Course';
import { motion } from 'framer-motion';

const Courses = ({coursework}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }} 
      className="flex flex-col items-center justify-center w-full space-y-4 md:mt-20 lg:mt-4 lg:space-y-0 lg:space-x-8 lg:flex-row">
        {coursework.map((course) => (
            <div key={course._id} className="flex-col items-center justify-center w-full p-4 text-gray-300 rounded-lg md:border-2 md:border-gray-800 lg:w-1/3 md:flex">
                <h2 className="text-md md:font-bold tracking-[1px] text-center md:text-2xl">{course.title}</h2>
                <Course key={course._id} courses={course.Courses} />
            </div> 
        ))}
    </motion.div>
  )
}

export default Courses
