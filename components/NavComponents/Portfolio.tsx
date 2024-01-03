import React, { useEffect } from 'react';
import { useRecoilState } from "recoil";
import useInView from "react-cool-inview";
import { portfolioState } from "../../Atoms/portfolioAtom";
import PageTitle from "../subComponents/ReusableComponents/PageTitle";
import Works from "../subComponents/PortfolioComponents/Works";
import { Portfolios } from "../../typings";
import { myWorks } from '../../lib/Data';

type Props = {
    portfolio: Portfolios[];
}
function Portfolio({ portfolio}: Props) {
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
      {/* @ts-expect-error async server component */}
        <PageTitle title={"Portfolio"} sub={"Showcasing some of my best work"} />
      {/* @ts-expect-error async server component */} 
        <Works myWorks={portfolio} />
        <div className="absolute w-[550px] h-[550px] top-[30%] rounded-full border-t-[100px] bg-slate-800 border-gray-900 opacity-40 -skew-y-12"></div>
        <div className="absolute w-1/2 h-[700px] top-[30%] rounded-full border-x-4 border-gray-900 -skew-y-12"></div>
    </div>
  )
}

export default Portfolio;