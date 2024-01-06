import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../../sanity';
import { Introduction } from '../../typings';

const query = groq`*[_type == "intro"]{
  ...,
  typingTitle[]->{title}
}`;

type Data = {
    intro: Introduction[];
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const intro: Introduction[] = await sanityClient.fetch(query);
    res.status(200).json({ intro })
  }