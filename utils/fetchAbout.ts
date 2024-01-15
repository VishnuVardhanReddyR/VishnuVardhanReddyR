import { AboutAuthor } from "../typings";
import { groq } from 'next-sanity';
import { sanityClient } from '../sanity';

const query = groq`*[_type == "about"]{
    ...,
    contact[]->
  }`;

export const getAbout = async () => {
    const res = await sanityClient.fetch(query);
    const about: AboutAuthor[] = res;
    return about;
}