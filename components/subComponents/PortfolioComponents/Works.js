import React from 'react';
import Work from "./work";

function Works({ inView }) {
    
    const myWorks = [
        {
            name: 'Spotify Clone', 
            href: "https://github.com/VishnuVardhanReddyR/spotify-clone.git",
            content: "A Web-app which resembles spotify website, and its functionality. Using Next.js framework, and Tailwind css.",
            img: "spotify.png",
            swap: false,
            animeLeft: "animate-fade-in-left",
            animeRight: "animate-fade-in-right"
        },
        {
            name: 'Instagram Clone', 
            href: "https://insta-clone-rose-seven.vercel.app/",
            content: "A Web-app which resembles Instagram web-ui, and its functionality. Using Next.js framework, firebase and Tailwind css.",
            img: "instagram-logo.png",
            swap: true,
            animeLeft: "animate-fade-in-left-1",
            animeRight: "animate-fade-in-right-1"
        },
        {
            name: 'Departmental Website', 
            href: "https://github.com/VishnuVardhanReddyR/Template-for-student-details-.git",
            content: "Website build to store student details in a department. Build using Html, css and Php.",
            img: "department.png",
            swap: false,
            animeLeft: "animate-fade-in-left-2",
            animeRight: "animate-fade-in-right-2"
        },
    ]
  return (
    <section className="text-gray-400 body-font">
        <div className="container px-5 py-24 mx-auto">
            {myWorks.map((work, i) => (
                <Work
                    key={i}
                    count={i}
                    name={work.name}
                    href={work.href}
                    content={work.content}
                    img={work.img}
                    swap={work.swap}
                    animeLeft={work.animeLeft}
                    animeRight={work.animeRight}
                    inView={inView} 
                    length={myWorks.length-1}
                />
            ))}
        </div>
    </section>
  )
}

export default Works;
