import React from 'react';

function NavDot({ href, open }) {
  return (
        <div className="items-center flex" >
            <a   
                href={href} 
                className={`${open? 
                    `bg-Primary scale-y-[1.75] rounded-md transition-all duration-150 ease-out` : 
                    `border-2 border-gray-700 rounded-full`}  
                    h-4 w-4 ml-4 transition transform duration-300`}></a>
        </div>
  )
}

export default NavDot;
