import React from 'react';
import { useRecoilState } from "recoil";
import { sidebarState } from "../../Atoms/sidebarAtom";


function SocialmediaIcons() {
        const SocialIcons = [
                {name: 'github', href: 'https://github.com/VishnuVardhanReddyR', img:'github.png'},
                {name: 'linkedin', href: 'https://www.linkedin.com/in/vishnuvardhanreddyrapuru/', img:'linkedin.png'},
                {name: 'twitter', href: 'https://www.twitter.com/vishnu_rapuru', img:'twitter.png'},
                {name: 'facebook', href: 'https://www.facebook.com/192.168.2.v', img:'facebook.png'},
                {name: 'instagram', href: 'https://www.instagram.com/vishnuvardhanr3ddy.r/', img:'instagram.png'}
        ]

        const [sidebarOpen, setSidebarOpen] = useRecoilState(sidebarState); 
  
        return (
        <div>
        <div className={`${sidebarOpen ? `flex` : `hidden`} fixed animate-fade-in-right top-1/3 lg:left-6 lg:flex`}>
          <div>
                {SocialIcons.map((icon, i) => (
                        <div key={icon.name} className="mb-4">
                                <a href={icon.href}>
                                        <img className="socialmedia-icons" src={`/` + icon.img} alt=""/>
                                </a>
                        </div>        
                ))}
          </div>
        </div>
    </div>
  );
}

export default SocialmediaIcons
