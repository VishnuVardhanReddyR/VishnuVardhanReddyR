import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../../sanity';
import { Portfolio } from '../../typings';

const query = groq`*[_type == "portfolio"]`;

type Data = {
    portfolio: Portfolio[];
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const portfolio: Portfolio[] = await sanityClient.fetch(query);
    res.status(200).json({ portfolio })
  }