import { Contacts } from "../typings";
import { groq } from 'next-sanity';
import { sanityClient } from '../sanity';

const query = groq`*[_type == "contact"]`;

export const getContact = async () => {
    const res = await sanityClient.fetch(query);
    const contact: Contacts[] = res;
    return contact;
}