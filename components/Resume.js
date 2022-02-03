import React from 'react';

function Resume() {
  return (
    <div className="h-screen">
      <div className="mt-20 pt-8 bg-black">
          <div className="space-y-8 text-center justify-center">
            <p className="text-gray-400 text-xl">Check out my Resume</p>
            <p className="font-semibold text-white text-3xl">Resume</p>
          </div>
          <div>
              <div className="grid grid-cols-2 mt-20 text-white ml-20">
                  <div className="grid-cols-1">
                    <h1 className="font-bold text-2xl">Education</h1>
                    <div>
                        
                    </div>
                  </div>
                  <div className="grid-cols-1">
                    <h1 className="font-bold text-2xl">Experience</h1>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Resume
