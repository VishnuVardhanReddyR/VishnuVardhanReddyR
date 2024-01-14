import type { GetStaticProps } from 'next';
import Head from 'next/head';
import LandingPage from "../components/NavComponents/LandingPage";
import Header from "../components/Header";
import About from "../components/NavComponents/About";
import Resume from "../components/NavComponents/Resume";
import Portfolio from "../components/NavComponents/Portfolio";
import Contact from "../components/NavComponents/Contact";
import Footer from "../components/Footer";
import NavDots from "../components/subComponents/FixedComponents/NavDots";
import Coursework from '../components/NavComponents/Coursework';
import Skillset from '../components/NavComponents/Skillset';
import { AboutAuthor, CourseWorks, Portfolios, Resumes, Skills, Contacts, Introduction, Socials, Titles } from '../typings';
import { getPortfolio } from '../utils/fetchPortfolio';
import { getAbout } from '../utils/fetchAbout';
import { getCoursework } from '../utils/fetchCoursework';
import { getSkills } from '../utils/fetchSkills';
import { getResume } from '../utils/fetchResume';
import { getContact } from '../utils/fetchContact';
import { getIntro } from '../utils/fetchIntro';
import { getSocials } from '../utils/fetchSocials';
import { getTitles } from '../utils/fetchTitles';

type Props = {
  portfolio: Portfolios[]; 
  about: AboutAuthor[];
  coursework: CourseWorks[];
  skills: Skills[];
  resume: Resumes[];
  contact: Contacts[];
  intro: Introduction[];
  socials: Socials[];
  titles: Titles[];
};

const Home = ({portfolio, about, coursework, skills, resume, contact, intro, socials, titles }: Props) => {

  return (
    <div className="h-screen overflow-y-scroll bg-black snap-y snap-mandatory caret-inherit max-w-screen scrollbar-hide scroll-smooth">
      <Head>
        <title>Vishnu Rapuru</title>
        <link rel="icon" href="/VR-logo.png" />
      </Head>

      {/* @ts-expect-error async server component */}
      <Header socials={socials} />
      
      <section id="home" className="snap-center">
        {/* @ts-expect-error async server component */}
        <LandingPage intro={intro} />
      </section>
      
      <section className="snap-center" >
        {/* @ts-expect-error async server component */}
        <About about={about} titles={titles[2]} />
      </section>
      
      <section className="snap-center" >
        {/* @ts-expect-error async server component */}
        <Coursework coursework={coursework} titles={titles[1]} />
      </section>
      
      <section className="snap-center">
        {/* @ts-expect-error async server component */}
        <Portfolio portfolio={portfolio} titles={titles[5]} />
      </section>
      
      <section className="snap-center">
        {/* @ts-expect-error async server component */}
        <Skillset skills={skills} titles={titles[4]} />  
      </section>
      
      <section className="snap-center">
        {/* @ts-expect-error async server component */}
        <Resume resume={resume} titles={titles[3]} />
      </section>
      
      
      <section className="snap-center">
        {/* @ts-expect-error async server component */}
        <Contact contact={contact} titles={titles[0]} />
        {/* @ts-expect-error async server component */}
        <Footer socials={socials} />
      </section>
      

    </div>
  )
}

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const portfolio: Portfolios[] = await getPortfolio();
  const about: AboutAuthor[] = await getAbout();
  const coursework: CourseWorks[] = await getCoursework();
  const skills: Skills[] = await getSkills();
  const resume: Resumes[] = await getResume();
  const contact: Contacts[] = await getContact();
  const intro: Introduction[] = await getIntro();
  const socials: Socials[] = await getSocials();
  const titles: Titles[] = await getTitles();

  return {
    props: {
      portfolio,
      about,
      coursework,
      skills,
      resume,
      contact,
      intro,
      socials,
      titles,
    },
    revalidate: 10,
  };
}
