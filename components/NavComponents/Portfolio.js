import React, { useEffect } from 'react';
import { useRecoilState } from "recoil";
import useInView from "react-cool-inview";
import { portfolioState } from "../../Atoms/portfolioAtom";
import PageTitle from "../subComponents/ReusableComponents/PageTitle";
import Works from "../subComponents/PortfolioComponents/Works";

function Portfolio({ portfolio, titles}) {
    const[ portfolioOpen, setPortfolioOpen ] = useRecoilState(portfolioState);

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
        setPortfolioOpen(inView);
    },[inView]);
  
    return (
      <div className='relative z-0 h-screen p-4'>
    {/* <div id="Portfolio" className="relative z-0 flex flex-col items-center justify-center h-screen max-w-full pt-6 mx-auto overflow-hidden text-left"> */}
      {/* @ts-expect-error async server component */}
        <PageTitle title={titles.title} sub={titles.sub} />
      {/* @ts-expect-error async server component */} 
        <Works myWorks={portfolio} />
        <div className="absolute w-full h-[500px] top-[30%] border-y-4 border-gray-800 opacity-40 -skew-y-12"></div>
        <div className="md:absolute hidden w-1/2 h-[700px] top-[30%] rounded-full border-x-4 border-gray-900 -skew-y-12"></div>
    </div>
  )
}

export default Portfolio;