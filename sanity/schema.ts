import { type SchemaTypeDefinition } from 'sanity'
import about from './schemas/about';
import contact from './schemas/contact';
import coursework from './schemas/coursework';
import courses from './schemas/courses';
import portfolio from './schemas/portfolio';
import resume from './schemas/resume';
import skill from './schemas/skill';
import intro from './schemas/intro';
import typing from './schemas/typing';
import socials from './schemas/socials';
import titles from './schemas/titles';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    intro, 
    typing, 
    about, 
    contact, 
    coursework, 
    courses, 
    portfolio, 
    resume, 
    skill, 
    socials,
    titles,
  ],
}
