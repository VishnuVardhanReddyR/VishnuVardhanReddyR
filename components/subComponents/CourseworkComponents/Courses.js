import React from 'react'
import Course from './Course';

const Courses = ({coursework}) => {
  return (
    <div className="flex flex-col items-center justify-center w-full mt-20 space-y-4 lg:mt-4 lg:space-y-0 lg:space-x-8 lg:flex-row">
        {coursework.map((course) => (
            <div className="flex-col items-center justify-center w-full p-8 text-gray-300 border-2 border-gray-800 rounded-lg lg:w-1/3 md:flex">
                <h2 className="text-2xl font-bold text-center">{course.title}</h2>
                <Course courses={course.Courses} />
            </div> 
        ))}
    </div>
  )
}

export default Courses
