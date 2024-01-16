import { Titles } from "../typings";
import { groq } from 'next-sanity';
import { sanityClient } from '../sanity';

const query = groq`*[_type == "titles"]`;

export const getTitles = async () => {
    const res = await sanityClient.fetch(query);
    const titles: Titles[] = res;
    return titles;
}