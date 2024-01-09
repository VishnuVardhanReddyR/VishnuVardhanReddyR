import React from 'react';
import Logo from "./subComponents/ReusableComponents/Logo";
import SocialIcons from './subComponents/FixedComponents/SocialIcons';

function Footer({socials}) {
  return (
    <footer className="z-50 text-gray-400 border-t-2 border-gray-900 body-font">
        <div className="container flex flex-col items-center px-5 py-8 mx-auto sm:flex-row">
            <a className="flex items-center justify-center font-medium text-white title-font md:justify-start">
                <Logo firstName={"VISHNU"} lastName={"RAPURU"} /> 
            </a>
            <p className="mt-4 text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0">© 2022 —
            <a href="https://vishnuvardhanreddyr.vercel.app/" className="ml-1 text-gray-500" target="_blank" rel="noopener noreferrer">@Vishnu Vardhan Reddy Rapuru</a>
            </p>
            <span className="inline-flex justify-center mt-4 sm:ml-auto sm:mt-0 sm:justify-start">
                <SocialIcons socials={socials} />
            </span>
        </div>
    </footer>
  )
}

export default Footer;
