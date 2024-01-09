import React, { useEffect } from 'react';
import useInView from "react-cool-inview";
import { useRecoilState } from "recoil";
import { contactState } from "../../Atoms/contactAtom";
import PageTitle from '../subComponents/ReusableComponents/PageTitle';
import MapCard from "../subComponents/ContactComponents/MapCard";
import ContactForm from "../subComponents/ContactComponents/ContactForm";

const Contact = ({contact, titles}) => {

return (
    <div id="Contact" className="h-screen p-8">
        <PageTitle title={titles.title} sub={titles.sub} />
        <section className="relative text-gray-400 body-font">
            <div className="container flex flex-wrap h-full px-5 mx-auto sm:flex-nowrap">
                <MapCard mapURL={contact[0].mapLocation} email={contact[0].email} address={contact[0].address} />
                <ContactForm />
            </div>
        </section>
    </div>
  )
}

export default Contact
