import React from 'react';
import ContactInput from "./ContactInput";
import ContactTextArea from "./ContactTextArea";
import { contactFields } from "../../../lib/Data";

function ContactForm() {
  let title = "Message Me",
      text = "Always Available for freelance work if the right project comes along, Feel free to contact me!",
      buttonLabel = "Send Message",
      note = "Work under Progress, Feel free to use E-mail to contact me.";

  return (
    <div className={`flex flex-col lg:w-1/3 md:w-1/2 md:ml-auto w-full md:py-8 mt-8 md:mt-0`}>
        <h2 className="mb-1 text-lg font-medium text-white title-font">{title}</h2>
        <p className="mb-5 leading-relaxed">{text}</p>
        {contactFields.map((input,i) => (
          <ContactInput name={input.name} type={input.type} label={input.label} />
        ))}
        <ContactTextArea name={"message"} label={"Message *"} />
        {/* <button className="px-6 py-2 text-lg text-white border-0 rounded bg-Primary focus:outline-none hover:bg-Primary">{buttonLabel}</button> */}
        <p className="mt-3 text-xs text-gray-400 text-opacity-90">{note}</p>
    </div>
  )
}

export default ContactForm;
