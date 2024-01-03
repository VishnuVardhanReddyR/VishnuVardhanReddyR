import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '4zvk5zsg',
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2021-03-25',
    useCdn: process.env.NODE_ENV === 'production',
};

export const sanityClient = createClient(config);

const builder = imageUrlBuilder(sanityClient);

export const  urlFor = (source: any) => 
    builder.image(source);
