import Head from 'next/head';
import LandingPage from "../components/LandingPage";
import Header from "../components/LandingPageComponents/Header";
import About from "./About";

export default function Home() {
  return (
    <div className="bg-black">
      <Head>
        <title>Vishnu Vardhan Reddy R</title>
        <link rel="icon" href="/VR-logo.png" />
      </Head>
      
      <Header />        
      <LandingPage />
    </div>
  )
}
