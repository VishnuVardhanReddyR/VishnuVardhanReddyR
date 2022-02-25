import React from 'react';

function MapCard({ inView }) {
  return (
    <div className={`lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative`}>
        <iframe 
            width="100%" 
            height="100%" 
            title="map" 
            className={`${inView? `animate-fade-in-right`: ``} absolute inset-0 filter grayscale-[1] contrast-[1.2] opacity-[0.16]`} 
            frameborder="0" 
            marginHeight="0" 
            marginWidth="0" 
            scrolling="no" 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d951.7719430396421!2d78.54360265179997!3d17.407574936007702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99f77a5609d5%3A0x140ab5ee38921fbf!2sHome!5e0!3m2!1sen!2sin!4v1643984434234!5m2!1sen!2sin">
        </iframe>
        <div className={`${inView? `animate-fade-in-up animation-delay-200`: ``} bg-black relative flex flex-wrap py-6 rounded shadow-md`}>
            <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">ADDRESS</h2>
                <p className="mt-1">Habsiguda, Uppal, Hyderabad.</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs">EMAIL</h2>
                <a href="mailto:vishnurapuru10@gmail.com" className="text-Primary leading-relaxed">vishnurapuru10@gmail.com</a>
            </div>
        </div>
    </div>
  )
}

export default MapCard;
