import React from 'react';
import { Typewriter } from "react-simple-typewriter";

function IntroPage() {

  return (
    <div>
      <main>
        <div className=" text-slate-400">
          <div className="ml-[25%] items-center justify-between">
            <h1 className="p-5 text-2xl pt-[25%] text-gray-200 font-bold lg:text-6xl md:text-3xl">
                Vishnu Vardhan Reddy Rapuru
            </h1>
            <p className="text-gray-200 ml-[20%] text-xl p-4 lg:text-5xl md:text-2xl">
              I`m{' '}
              <span>
                <Typewriter
                  words={['an Engineer', 'a Developer', 'a Free Lancer']}
                  loop={100}
                  cursor
                  cursorStyle='|'
                  typeSpeed={80}
                  deleteSpeed={70}
                  delaySpeed={2000}
                />
              </span>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default IntroPage;
