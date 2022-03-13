import React from 'react';

const ContactTextArea = ({name, type, label}) => {
  return (
    <div className="relative mb-4">
        <label for={name} className="leading-7 text-sm text-gray-400">{label}</label>
        <textarea disabled 
          id={name} 
          name={name} 
          className="w-full bg-gray-800 rounded border border-gray-700 focus:border-Primary focus:ring-2 
            focus:ring-Primary h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors 
            duration-200 ease-in-out">
        </textarea>
    </div>
  )
}

export default ContactTextArea;
