import React from 'react';

function SocialMediaIcon({ name, href, img}) {
  return (
    <div key={name} className="mb-4 w-5 h-5 rounded hover:bg-Primary cursor-pointer">
        <a href={href}>
            <img className="socialmedia-icons" src={`/` + img} alt=""/>
        </a>
    </div> 
  )
}

export default SocialMediaIcon;
