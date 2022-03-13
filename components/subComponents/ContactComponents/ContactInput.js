import React from 'react'

const ContactInput = ({name, type, label}) => {
  return (
    <div className="relative mb-4">
        <label for={name} className="leading-7 text-sm text-gray-400">{label}</label>
        <input disabled 
          type={type} 
          id={name}
          name={name} 
          className="w-full bg-gray-800 rounded border border-gray-700 focus:border-Primary focus:ring-2 
            focus:ring-Primary text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors 
            duration-200 ease-in-out" />
    </div>
  )
}

export default ContactInput;
