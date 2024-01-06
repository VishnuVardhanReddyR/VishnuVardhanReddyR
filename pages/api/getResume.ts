import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../../sanity';
import { Resumes } from '../../typings';

const query = groq`*[_type == "resume"]`;
type Data = {
    resume: Resumes[];
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const resume: Resumes[] = await sanityClient.fetch(query);
    res.status(200).json({ resume })
  }