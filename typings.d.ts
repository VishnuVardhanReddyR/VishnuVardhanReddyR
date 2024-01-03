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