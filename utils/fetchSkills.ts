import { Skills } from "../typings";
import { groq } from 'next-sanity';
import { sanityClient } from '../sanity';

const query = groq`*[_type == "skill"]|order(percentage desc)`;

export const getSkills = async () => {
    const res = await sanityClient.fetch(query);
    const skills: Skills[] = res;
    return skills;
}