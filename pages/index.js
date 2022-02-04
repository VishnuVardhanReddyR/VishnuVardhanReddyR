import Head from 'next/head';
import LandingPage from "../components/LandingPage";
import Header from "../components/LandingPageComponents/Header";
import About from "../components/About";
import Resume from "../components/Resume";
import styled from "styled-components";
import NavDots from "../components/NavDots";

export default function Home() {
  return (
    <div className="bg-black max-w-screen h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Vishnu Vardhan Reddy R</title>
        <link rel="icon" href="/VR-logo.png" />
      </Head>
      <div className="scrollbar-hide">
        <Header />
        <LandingPage />
        <About />
        <Resume />
      </div>
    </div>
  )
}
