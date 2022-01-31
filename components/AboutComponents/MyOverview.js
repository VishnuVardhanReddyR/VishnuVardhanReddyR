import React from 'react'

function MyOverview() {
  return (
    <div>
      <div className="space-y-4 items-start">
          <p className="text-4xl">Who am i?</p>
          <p className="text-2xl text-gray-400">I'm Vishnu Vardhan Reddy, an Engineer and Web Developer</p>
          <p className="text-sm space-x-6">I am a freelancer based in the India and I have been building 
              noteworthy websites for years, which comply with the latest design trends. 
              I help convert a vision and an idea into meaningful and useful Products. Having a sharp eye for 
              product evolution helps me prioritize tasks, iterate fast and deliver faster.</p>
            <hr className="border-t-[1px] border-gray-800" /> 
            <div className="text-sm grid grid-cols-2 text-align-left">
                <div className="cols-span-1">
                    <p><b>Name : </b>Vishnu Vardhan Reddy Rapuru</p>
                    <p><b>Age : </b>23</p>
                </div>
                <div className="cols-span-1">
                    <p><b>Email : </b>vishnurapuru10@gmail.com</p>
                    <p><b>From : </b>Hyderabad, India</p>
                </div>
            </div>
      </div>
    </div>
  )
}

export default MyOverview
