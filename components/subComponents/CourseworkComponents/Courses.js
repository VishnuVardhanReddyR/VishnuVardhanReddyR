import React from 'react'
import Course from './Course';
import { motion } from 'framer-motion';

const Courses = ({ coursework }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center h-1/2 w-full space-y-4 md:mt-20 lg:mt-4 lg:space-y-0 lg:space-x-8 lg:flex-row overflow-y-scroll scrollbar-hide scroll-smooth">
      {coursework.map((course) => (
        <div key={course._id} className="overflow-y-scroll scrollbar-hide scroll-smooth h-full flex-col items-center justify-start w-full text-gray-300 rounded-lg md:border-2 md:border-gray-800 lg:w-1/3 md:flex">
          <div className="sticky top-0 text-md md:font-semibold uppercase tracking-[1px] text-center md:text-lg w-full">
            <h2 className="pt-[0.1px] bg-black w-full">{course.title}</h2>
            <div className="h-4 w-full bg-gradient-to-b from-black to-transparent"></div>
          </div>
          <Course key={course._id} courses={course.Courses} />
        </div>
      ))}
    </motion.div>
  )
}

export default Courses
