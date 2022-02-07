import React from 'react';
import { useRecoilState } from "recoil";
import { sidebarState } from "../../Atoms/sidebarAtom";

function SocialmediaIcons() {
        const [sidebarOpen, setSidebarOpen] = useRecoilState(sidebarState); 
  return (
    <div>
      <div className={`${sidebarOpen ? `flex` : `hidden animate-fade-out-right`} animate-fade-in-left lg:animate-fade-in-right absolute top-3/4 right-6 lg:left-6 lg:top-72 lg:flex`}>
          <div>
                <div className="mb-4">
                        <a href="https://github.com/VishnuVardhanReddyR">
                                <img className="socialmedia-icons" src="/github.png" alt=""/>
                        </a>
                </div>
                <div className="mb-4">
                        <a href="https://www.linkedin.com/in/vishnuvardhanreddyrapuru/">
                                <img className="socialmedia-icons" src="/linkedin.png" alt=""/>
                        </a>
                </div>
                <div className="mb-4">
                        <a href="https://www.twitter.com/vishnu_rapuru">
                                <img className="socialmedia-icons" src="/twitter.png" alt=""/>
                        </a>
                </div>
                <div className="mb-4">
                        <a href="https://www.facebook.com/192.168.2.v">
                                <img className="socialmedia-icons" src="/facebook.png" alt=""/>
                        </a>
                </div>
                <div className="mb-4">
                        <a href="https://www.instagram.com/vishnuvardhanr3ddy.r/">
                                <img className="socialmedia-icons" src="/instagram.png" alt=""/>
                        </a>
                </div>
          </div>
        </div>
    </div>
  );
}

export default SocialmediaIcons
