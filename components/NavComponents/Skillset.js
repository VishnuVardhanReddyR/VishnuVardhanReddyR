import React from 'react';
import PageTitle from "../subComponents/ReusableComponents/PageTitle";
import MySkills from '../subComponents/ResumeComponents/MySkills';

const Skillset = () => {
  return (
    <div className="h-screen px-6 my-48 space-y-8">
        <PageTitle title={'Skillset'} sub={'here is my'} />  
        <MySkills />
    </div>
  )
}

export default Skillset
