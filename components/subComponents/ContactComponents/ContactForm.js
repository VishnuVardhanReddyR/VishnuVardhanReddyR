import React from 'react';
import ContactInput from "./ContactInput";
import ContactTextArea from "./ContactTextArea";
import { motion } from 'framer-motion';

function ContactForm({ contact }) {
  const { nameLabel, emailLabel, messageLabel, contactTitle, contactSub, contactNote } = contact[0];
  
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }} 
      className={`flex flex-col lg:w-1/3 md:w-1/2 md:ml-auto w-full md:py-8 mt-8 md:mt-0`}>
        <h2 className="mb-1 text-lg font-medium text-white title-font">{contactTitle}</h2>
        <p className="mb-5 leading-relaxed">{contactSub}</p>
        <ContactInput name="name" type="text" label={nameLabel} />
        <ContactInput name="email" type="email" label={emailLabel} />
        <ContactTextArea name={"message"} label={messageLabel} />
        {/* <button className="px-6 py-2 text-lg text-white border-0 rounded bg-Primary focus:outline-none hover:bg-Primary">{buttonLabel}</button> */}
        <p className="mt-3 text-xs text-gray-400 text-opacity-90">{contactNote}</p>
    </motion.div>
  )
}

export default ContactForm;
