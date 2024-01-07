import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../../sanity';
import { Titles } from '../../typings';

const query = groq`*[_type == "titles"]`;

type Data = {
    titles: Titles[];
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const titles: Titles[] = await sanityClient.fetch(query);
    res.status(200).json({ titles })
  }