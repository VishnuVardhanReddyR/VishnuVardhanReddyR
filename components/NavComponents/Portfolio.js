import React, { useEffect } from 'react';
import { useRecoilState } from "recoil";
import useInView from "react-cool-inview";
import { portfolioState } from "../../Atoms/portfolioAtom";
import PageTitle from "../subComponents/ReusableComponents/PageTitle";
import Works from "../subComponents/PortfolioComponents/Works";

function Portfolio() {
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
        <div id="Portfolio" ref={observe} className="relative z-0 flex flex-col items-center h-screen max-w-full mx-auto overflow-hidden text-left justify-evenly">
        <PageTitle title={"Portfolio"} sub={"Showcasing some of my best work"} />
        <Works inView={inView} />
        <div className="absolute w-full top-[30%] bg-gray-900 left-0 h-[500px] -skew-y-12"></div>
        <div className="absolute w-full top-[30%] border border-gray-700 left-0 h-[500px] -skew-y-12"></div>
    </div>
  )
}

export default Portfolio;