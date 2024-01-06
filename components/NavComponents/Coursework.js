import React from 'react'
import PageTitle from "../subComponents/ReusableComponents/PageTitle";
import Courses from '../subComponents/CourseworkComponents/Courses';

const Coursework = ({coursework}) => {
    console.log(coursework);
  return (
    <div className="h-screen px-6">
        <PageTitle title={'Coursework'} sub={'here is my'} />
        <Courses coursework={coursework} />
    </div>
  )
}

export default Coursework
