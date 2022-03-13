// Header data
export const headers = [
    { name: 'HOME', href: '#LandingPage', open: `homeOpen` },
    { name: 'ABOUT', href: '#About', open: `aboutOpen`},
    { name: 'RESUME', href: '#Resume', open: `resumeOpen` },
    { name: 'PORTFOLIO', href: '#Portfolio', open: `portfolioOpen` },
    { name: 'CONTACT', href: '#Contact', open: `contactOpen` },
]

// About data

export const overview = {
    header: 'As a Software Engineer and Web Developer, I am Vishnu Vardhan.',
    content: 'As a freelancer based in India, I have been developing noteworthy websites for years that follow current trends. It is my job to turn ideas into solutions. Being able to see product evolution clearly helps me prioritize tasks, iterate promptly, and deliver projects faster.'
}

export const services = [
    {
        name: 'Web Development', 
        img:'WebDev.png',
        content: 'Web Development using Frontend-frameworks such as React.js and Next.js',
      },
      {
        name: 'Fully Responsive', 
        img:'responsive.png',
        content: 'Websites that are Fully Responsive and compatible with all screen sizes',
      },
      {
        name: 'PSD Design', 
        img:'photoshop.png',
        content: 'Photshop skills for editing embedded images on a website',
      },
  ]

// Resume data

export const resumeData = [
    { 
      name: 'Engineering Academics', 
      content: "Joined in Sri Indu College of Engineering and Technology for my Bachelor's of Technology in Computer Science and Engineering.",
      img: 'university-building.png',
    },
    { 
      name: 'Projects and Acheivements', 
      content: "During my college years developed a website for our department to store student details. Also got selected for the final round of Telangana State Hackathon.",
      img: 'project.png',
    },
    { 
      name: 'B.Tech Degree', 
      content: "I completed my under-graduation in Computer Science and Engineering during the year 2020.",
      img: 'academic.png',
    },
    { 
      name: 'Freelancer', 
      content: "I have started my career as a freelancer and doing many Projects as a Frontend Developer.",
      img: 'freelancer.png',
    }
  ]



// Portfolio data

export const myWorks = [
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

// Contact data
export const contactFields = [
  {name: "name", type: "text", label: "Name *"},
  {name: "email", type: "email", label: "Email *"},
];

// miscileneous data
export const SocialIcons = [
    {name: 'github', href: 'https://github.com/VishnuVardhanReddyR', img:'github.png'},
    {name: 'linkedin', href: 'https://www.linkedin.com/in/vishnuvardhanreddyrapuru/', img:'linkedin.png'},
    {name: 'twitter', href: 'https://medium.com/@vishnurapuru10', img:'medium.png'},
    {name: 'facebook', href: 'https://www.facebook.com/192.168.2.v', img:'facebook.png'},
    {name: 'instagram', href: 'https://www.instagram.com/vishnuvardhanr3ddy.r/', img:'instagram.png'}
]
