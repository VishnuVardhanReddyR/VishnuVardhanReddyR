import React from 'react';
import { SocialIcons } from "../../../lib/Data";
import SocialMediaIcon from "./SocialMediaIcon";

function SocialmediaIcons() {  
        return (
        <div className={`hidden fixed animate-fade-in-right top-1/3 lg:left-6 lg:flex`}>
          <div>
                {SocialIcons.map((icon) => (
                        <SocialMediaIcon
                                key={icon.name} 
                                name={icon.name} 
                                href={icon.href}
                                img={icon.img}
                        />
                ))}
          </div>
        </div>
  );
}

export default SocialmediaIcons
