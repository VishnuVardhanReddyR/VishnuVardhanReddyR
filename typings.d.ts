interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    _type: 'image';
    asset: {
        _ref: string;
        _type: 'reference';
    };
}



export interface Portfolios extends SanityBody {
    _type: 'portfolio';
    title: string;
    linkToProject: string;
    description: string;
    image: Image;
}
export interface AboutAuthor extends SanityBody {
    _type: 'about';
    title: string;
    description: string;
    image: Image;
    Contact: Contacts[];
}

export interface Contacts extends SanityBody {
    _type: 'contact';
    name: string;
    address: string;
    email: email;
    mapLocation: url;
}
export interface CourseWorks extends SanityBody {
    _type: 'coursework';
    title: string;
    courses: courses[];
}
export interface courses extends SanityBody {
    _type: 'courses';
    course: string;
}
export interface Resumes extends SanityBody {
    _type: 'resume';
    title: string;
    description: text;
    date: string;
}
export interface Skills extends SanityBody {
    _type: 'skill';
    title: string;
    percentage: number;
}
export interface Introduction extends SanityBody {
    _type: 'intro';
    title: string;
    image: Image;
    typingTitle: typing[];
}

export interface typing extends SanityBody {
    _type: 'typing';
    title: string;
}
export interface Socials extends SanityBody {
    _type: 'socials';
    socialMediaName: string;
    url: url;
}
export interface Titles extends SanityBody {
    _type: 'titles';
    title: string;
    sub: string;
}

