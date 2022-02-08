import React, { useEffect } from 'react';
import { Typewriter } from "react-simple-typewriter";
import useInView from "react-cool-inview";
import { useRecoilState } from "recoil";
import { homeState } from "../../Atoms/homeAtom";

function IntroPage() {
  const[ homeOpen, setHomeOpen ] = useRecoilState(homeState);

  const { observe, inView} = useInView({
    threshold: 0.25,
    onChange: ({ observe }) => {
      observe(); 
    },
    onLeave: ({ unobserve }) => {
      unobserve();
    },
  });

  useEffect(() => {
    setHomeOpen(inView);
  },[inView]);

  return (
    <div id="LandingPage" ref={observe}>
      <section className="text-gray-600 body-font h-screen relative">
        <div className="grid grid-cols-1">
          <div className="grid grid-rows-1 h-2 md:h-32"></div>
          <div className="grid grid-rows-1">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
              <div className="text-center lg:w-2/3 w-full">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-300">Building Beautiful Web Experience</h1>
                <p className="text-gray-300 text-xl mb-8 leading-relaxed lg:text-5xl md:text-2xl">
                  I`m{' '}
                  <span className="">
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
                <div className="flex justify-center cursor-pointer">
                  <a href="#Portfolio" data-aos="fade-up" className={`inline-flex animate-bounce font-bold text-Primary text-xl rounded-2xl border-t-8 border-l-2 border-b border-Primary py-2 px-6 hover:text-Primary-hover hover:border-Primary-hover`}>
                    <div className="mr-2 items-center justify-center pt-2 cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
                      </svg>
                    </div>
                    View My Portfolio
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default IntroPage;