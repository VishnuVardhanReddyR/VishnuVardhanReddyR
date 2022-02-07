import React, { useEffect } from 'react';
import Loader from "./Extraas/Loader";
import useInView from "react-cool-inview";
import { useRecoilState } from "recoil";
import { contactState } from "../Atoms/contactAtom";

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
    <div ref={observe} id="Contact" className="pt-8 px-8">
        <div className="space-y-6 text-center justify-center">
            <p className="text-gray-400 text-xl">Feel free to contact me</p>
            <p className="font-bold text-white text-5xl">Get in Touch</p>
            <Loader />
        </div>
        <section className="text-gray-400 body-font relative">
            <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className={`lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative`}>
                    <iframe 
                        width="100%" 
                        height="100%" 
                        title="map" 
                        className={`${inView? `animate-fade-in-right`: ``} absolute inset-0 filter grayscale-[1] contrast-[1.2] opacity-[0.16]`} 
                        frameborder="0" 
                        marginheight="0" 
                        marginwidth="0" 
                        scrolling="no" 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d951.7719430396421!2d78.54360265179997!3d17.407574936007702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99f77a5609d5%3A0x140ab5ee38921fbf!2sHome!5e0!3m2!1sen!2sin!4v1643984434234!5m2!1sen!2sin">
                    </iframe>
                    <div className={`${inView? `animate-fade-in-up animation-delay-200`: ``} bg-black relative flex flex-wrap py-6 rounded shadow-md`}>
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">ADDRESS</h2>
                            <p className="mt-1">Habsiguda, uppal, Hyderabad.</p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">EMAIL</h2>
                            <a href="mailto:vishnurapuru10@gmail.com" className="text-Primary leading-relaxed">vishnurapuru10@gmail.com</a>
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">PHONE</h2>
                            <p className="leading-relaxed">955-016-5910</p>
                        </div>
                    </div>
                </div>
                <div className={`${inView? `animate-fade-in-left`: ``} lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0`}>
                    <h2 className="text-white text-lg mb-1 font-medium title-font">Message Me</h2>
                    <p className="leading-relaxed mb-5">Always Available for freelance work if the right project comes along, Feel free to contact me!</p>
                    <div className="relative mb-4">
                        <label for="name" className="leading-7 text-sm text-gray-400">Name</label>
                        <input disabled type="text" id="name" name="name" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label for="email" className="leading-7 text-sm text-gray-400">Email</label>
                        <input disabled type="email" id="email" name="email" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label for="message" className="leading-7 text-sm text-gray-400">Message</label>
                        <textarea disabled id="message" name="message" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                    {/* <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button> */}
                    <p className="text-xs text-gray-400 text-opacity-90 mt-3">Work under Progress, Feel free to use E-mail to contact me.</p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Contact
