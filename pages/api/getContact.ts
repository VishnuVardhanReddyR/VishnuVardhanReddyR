import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../../sanity';
import { Contacts } from '../../typings';

const query = groq`*[_type == "contact"]`;
type Data = {
    contact: Contacts[];
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const contact: Contacts[] = await sanityClient.fetch(query);
    res.status(200).json({ contact })
  }