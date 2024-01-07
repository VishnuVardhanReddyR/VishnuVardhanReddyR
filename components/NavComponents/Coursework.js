import React from 'react'
import PageTitle from "../subComponents/ReusableComponents/PageTitle";
import Courses from '../subComponents/CourseworkComponents/Courses';

const Coursework = ({coursework, titles}) => {
  return (
    <div className="h-screen px-6">
        <PageTitle title={titles.title} sub={titles.sub} />
        <Courses coursework={coursework} />
    </div>
  )
}

export default Coursework
