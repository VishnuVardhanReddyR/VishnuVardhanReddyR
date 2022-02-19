import React from 'react';
import Work from "./Work";

function Works({ inView }) {
    
    const myWorks = [
        {
            name: 'Spotify Clone', 
            href: "https://github.com/VishnuVardhanReddyR/spotify-clone.git",
            content: "A Web-app which resembles spotify website, and its functionality. Using Next.js framework, and Tailwind css.",
            img: "spotify.png",
            swap: false,
        },
        {
            name: 'Instagram Clone', 
            href: "https://insta-clone-rose-seven.vercel.app/",
            content: "A Web-app which resembles Instagram web-ui, and its functionality. Using Next.js framework, firebase and Tailwind css.",
            img: "instagram-logo.png",
            swap: true,
        },
        {
            name: 'Departmental Website', 
            href: "https://github.com/VishnuVardhanReddyR/Template-for-student-details-.git",
            content: "Website build to store student details in a department. Build using Html, css and Php.",
            img: "department.png",
            swap: false,
        },
        {
            name: 'Hulu clone', 
            href: "https://huluplus.vercel.app/",
            content: "A web application build to replicate the Hulu UI using nextjs and tailwindcss frameworks. TMDB API used for the images and content.",
            img: "hulu.png",
            swap: true,
        },
        {
            name: 'Whatsapp Clone', 
            href: "https://whatsplus.vercel.app/",
            content: "A web application build to learn whatsapp web UI using nextjs and tailwindcss frameworks. Firebase is used as the backend to store the user chats and emails.",
            img: "whatsapp.png",
            swap: false,
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
                    inView={inView} 
                    length={myWorks.length-1}
                />
            ))}
        </div>
    </section>
  )
}

export default Works;
