import Head from 'next/head';
import LandingPage from "../components/LandingPage";
import Header from "../components/Header";
import About from "../components/About";
import Resume from "../components/Resume";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import NavDots from "../components/NavDots";

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
    </div>
  )
}
