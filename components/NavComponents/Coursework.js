import React from 'react'
import PageTitle from "../subComponents/ReusableComponents/PageTitle";
import Courses from '../subComponents/CourseworkComponents/Courses';

const Coursework = ({coursework, titles}) => {
  return (
    <div className="h-screen p-[1px]">
        <PageTitle title={titles.title} sub={titles.sub} />
        <Courses coursework={coursework} />
    </div>
  )
}

export default Coursework
