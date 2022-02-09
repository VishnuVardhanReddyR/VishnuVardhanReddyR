import React, { useEffect } from 'react';
import useInView from "react-cool-inview";
import { useRecoilState } from "recoil";
import { contactState } from "../../Atoms/contactAtom";
import PageTitle from '../subComponents/ReusableComponents/PageTitle';
import MapCard from "../subComponents/ContactComponents/MapCard";
import ContactForm from "../subComponents/ContactComponents/ContactForm";

function Contact() {
    const[ contactOpen, setContactOpen ] = useRecoilState(contactState);

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
        setContactOpen(inView);
    },[inView]);

return (
    <div ref={observe} id="Contact" className="px-8 -translate-y-32">
        <PageTitle title={"Get in Touch"} sub={"Feel free to contact me"} />
        <section className="text-gray-400 body-font relative">
            <div className="container px-5 mx-auto flex sm:flex-nowrap flex-wrap">
                <MapCard inView={inView} />
                <ContactForm inView={inView} />
            </div>
        </section>
    </div>
  )
}

export default Contact
