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
    <div id="Portfolio" ref={observe} className="mt-8 px-8 pt-8">
        <PageTitle title={"Portfolio"} sub={"Showcasing some of my best work"} />
        <Works inView={inView} />
    </div>
  )
}

export default Portfolio;
