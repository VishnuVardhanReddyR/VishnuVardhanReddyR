import React, { useEffect } from 'react';
import { useRecoilState } from "recoil";
import useInView from "react-cool-inview";
import { Typewriter } from "react-simple-typewriter";
import { homeState } from "../../../Atoms/homeAtom";
import { motion } from 'framer-motion';
import Image from 'next/image';
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
              <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }} 
              className="flex flex-col items-center justify-center h-screen space-y-8 overflow-hidden text-center">
                <div className='relative w-48 h-48 overflow-hidden rounded-full contrast-200 grayscale'>
                  <Image layout="fill" src="https://media.licdn.com/dms/image/D5635AQEiyCm1aLd5bw/profile-framedphoto-shrink_400_400/0/1692832239716?e=1704164400&v=beta&t=Z6SHyZfxbppWOlED4WoWolzCGWdp1Bg0d3YQ8zJ6WGo" />
                </div>
                <h1 className="text-sm uppercase text-gray-300 pb-2 tracking-[15px]">Software Engineer</h1>
                <p className="mb-8 text-lg leading-relaxed text-gray-300 md:text-2xl lg:text-4xl 2xl:text-5xl">
                  {'<  '}
                  <span className="">
                    <Typewriter
                      words={['Master\'s in Computer Science', 'Web Developer', 'Ready to be Hired']}
                      loop={1000}
                      cursor
                      cursorStyle='/>'
                      typeSpeed={100}
                      deleteSpeed={100}
                      delaySpeed={2000}
                    />
                  </span>
                </p>
              </motion.div>
      </div>
  );
}

export default IntroPage;