import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../../sanity';
import { AboutAuthor } from '../../typings';

const query = groq`*[_type == "about"]`;

type Data = {
    about: AboutAuthor[];
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const about: AboutAuthor[] = await sanityClient.fetch(query);
    res.status(200).json({ about })
  }