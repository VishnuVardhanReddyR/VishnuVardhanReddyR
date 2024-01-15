import { CourseWorks } from "../typings";
import { groq } from 'next-sanity';
import { sanityClient } from '../sanity';

const query = groq`*[_type == "coursework"] { 
    ..., 
    Courses[]->
  }`;

export const getCoursework = async () => {
    const res = await sanityClient.fetch(query);
    const coursework: CourseWorks[] = res;
    return coursework;
}