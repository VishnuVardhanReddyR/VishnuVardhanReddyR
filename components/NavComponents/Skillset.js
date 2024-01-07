import React from 'react';
import PageTitle from "../subComponents/ReusableComponents/PageTitle";
import MySkills from '../subComponents/ResumeComponents/MySkills';

const Skillset = ({skills, titles}) => {
  return (
    <div className="h-screen px-6 my-48 space-y-8">
        <PageTitle title={titles.title} sub={titles.sub} />  
        <MySkills skills={skills} />
    </div>
  )
}

export default Skillset
