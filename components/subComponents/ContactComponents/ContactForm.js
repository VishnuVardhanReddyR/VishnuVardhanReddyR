import React from 'react';
import WorkType from "./WorkType.js";

function ContactForm({ inView }) {
  return (
    <div className={`${inView? `animate-fade-in-left`: ``} lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0`}>
        <h2 className="text-white text-lg mb-1 font-medium title-font">Message Me</h2>
        <p className="leading-relaxed mb-5">Always Available for freelance work if the right project comes along, Feel free to contact me!</p>
        <div className="relative mb-4">
            <label for="name" className="leading-7 text-sm text-gray-400">Name</label>
            <input disabled 
              type="text" 
              id="name" 
              name="name" 
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-Primary focus:ring-2 focus:ring-Primary 
                text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <div className="relative mb-4">
            <label for="email" className="leading-7 text-sm text-gray-400">Email</label>
            <input disabled 
              type="email" 
              id="email" 
              name="email" 
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-Primary focus:ring-2 
                focus:ring-Primary text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors 
                duration-200 ease-in-out" />
        </div>
        <div className="relative mb-4">
            <label for="message" className="leading-7 text-sm text-gray-400">Message</label>
            <textarea disabled 
              id="message" 
              name="message" 
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-Primary focus:ring-2 
                focus:ring-Primary h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors 
                duration-200 ease-in-out">
            </textarea>
        </div>
        <button className="text-white bg-Primary border-0 py-2 px-6 focus:outline-none hover:bg-Primary rounded text-lg">Send Message</button>
        <p className="text-xs text-gray-400 text-opacity-90 mt-3">Work under Progress, Feel free to use E-mail to contact me.</p>
    </div>
  )
}

export default ContactForm;
