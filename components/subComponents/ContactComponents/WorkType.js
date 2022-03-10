import React from 'react';

const WorkType = () => {
  return (
    <div>
        <h1>What type of website do you need?</h1>
        <label className="flex relative pl-6 cursor-pointer font-md">Personal Website
          <span className="absolute top-0 left-0 h-6 w-6 rounded"></span>
          <input type="radio" checked="checked" name="radio" />
        </label>
        <label className="container">Company Website
          <input type="radio" name="radio" />
          <span className="checkmark"></span>
        </label>
        <label className="container">other
          <input type="radio" name="radio" />
          <span className="checkmark"></span>
        </label>      
    </div>
  )
}

export default WorkType;
