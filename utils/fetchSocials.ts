import { Socials } from "../typings";
import { groq } from 'next-sanity';
import { sanityClient } from '../sanity';

const query = groq`*[_type == "socials"]`;

export const getSocials = async () => {
    const res = await sanityClient.fetch(query);
    const socials: Socials[] = res;
    return socials;
}