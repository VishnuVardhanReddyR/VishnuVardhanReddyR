import React from 'react';

const NavLink = ({ name, href, open }) => {
  return (
    <a
        href={href} 
        className={`${open ? 'text-Primary-hover font-bold scale-125' : ''} mr-5 hover:border-b border-white`}
    >
        {name}
    </a>
  )
}

export default NavLink;
