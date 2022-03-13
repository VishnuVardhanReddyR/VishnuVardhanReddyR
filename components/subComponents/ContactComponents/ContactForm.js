import React from 'react';
import ContactInput from "./ContactInput";
import ContactTextArea from "./ContactTextArea";
import { contactFields } from "../../../lib/Data";

function ContactForm({ inView }) {
  let title = "Message Me",
      text = "Always Available for freelance work if the right project comes along, Feel free to contact me!",
      buttonLabel = "Send Message",
      note = "Work under Progress, Feel free to use E-mail to contact me.";

  return (
    <div className={`${inView? `animate-fade-in-left`: ``} lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0`}>
        <h2 className="text-white text-lg mb-1 font-medium title-font">{title}</h2>
        <p className="leading-relaxed mb-5">{text}</p>
        {contactFields.map((input,i) => (
          <ContactInput name={input.name} type={input.type} label={input.label} />
        ))}
        <ContactTextArea name={"message"} label={"Message *"} />
        {/* <button className="text-white bg-Primary border-0 py-2 px-6 focus:outline-none 
        hover:bg-Primary rounded text-lg">{buttonLabel}</button> */}
        <p className="text-xs text-gray-400 text-opacity-90 mt-3">{note}</p>
    </div>
  )
}

export default ContactForm;
