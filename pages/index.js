import Head from 'next/head';
import LandingPage from "../components/NavComponents/LandingPage";
import Header from "../components/Header";
import About from "../components/NavComponents/About";
import Resume from "../components/NavComponents/Resume";
import Portfolio from "../components/NavComponents/Portfolio";
import Contact from "../components/NavComponents/Contact";
import Footer from "../components/Footer";
import NavDots from "../components/subComponents/FixedComponents/NavDots";
import SocialmediaIcons from "../components/subComponents/FixedComponents/SocialmediaIcons";

export default function Home() {
  return (
    <div className="bg-black caret-inherit max-w-screen h-screen overflow-y-scroll scrollbar-hide scroll-smooth">
      <Head>
        <title>Vishnu Vardhan Reddy R</title>
        <link rel="icon" href="/VR-logo.png" />
      </Head>
      <Header />
      <LandingPage />
      <About />
      <Resume />
      <Portfolio />
      <Contact />
      <Footer />
      <NavDots />
      <SocialmediaIcons />
    </div>
  )
}
