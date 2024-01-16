import { Introduction } from "../typings";
import { groq } from 'next-sanity';
import { sanityClient } from '../sanity';

const query = groq`*[_type == "intro"]{
    ...,
    typingTitle[]->{title}
  }`;

export const getIntro = async () => {
    const res = await sanityClient.fetch(query);
    const intro: Introduction[] = res;
    return intro;
}