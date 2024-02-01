import React from 'react';

const Course = ({ courses }) => {
  return (
    <div className="grid grid-cols-1 px-5 my-4 lg:grid-cols-2">
      {courses.map((course) => (
        <span key={course._id} className="flex p-2 m-1 bg-gray-800 rounded-lg">
          <span class="bg-gray-800 text-indigo-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </span>{course.course}
        </span>
      ))}
    </div>

  )
}

export default Course;