import { Resumes } from "../typings";
import { groq } from 'next-sanity';
import { sanityClient } from '../sanity';

const query = groq`*[_type == "resume"]`;

export const getResume = async () => {
    const res = await sanityClient.fetch(query);
    const resume: Resumes[] = res;
    return resume;
}