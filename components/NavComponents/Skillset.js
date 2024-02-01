import React from 'react';
import PageTitle from "../subComponents/ReusableComponents/PageTitle";
import MySkills from '../subComponents/ResumeComponents/MySkills';

const Skillset = ({ skills, titles }) => {
  return (
    <div className="h-screen p-6 space-y-4 overflow-y-scroll scrollbar-hide scroll-smooth">
      <PageTitle title={titles.title} sub={titles.sub} />
      <MySkills skills={skills} />
    </div>
  )
}

export default Skillset
