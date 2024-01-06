import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../../sanity';
import { CourseWorks } from '../../typings';

const query = groq`*[_type == "coursework"] { 
  ..., 
  Courses[]->
}`;
type Data = {
    coursework: CourseWorks[];
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const coursework: CourseWorks[] = await sanityClient.fetch(query);
    res.status(200).json({ coursework })
  }