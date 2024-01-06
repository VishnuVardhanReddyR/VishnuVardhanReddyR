import { type SchemaTypeDefinition } from 'sanity'
import about from './schemas/about';
import contact from './schemas/contact';
import coursework from './schemas/coursework';
import courses from './schemas/courses';
import portfolio from './schemas/portfolio';
import resume from './schemas/resume';
import skill from './schemas/skill';

console.log("sanity.ts", process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [about, contact, coursework, courses, portfolio, resume, skill ],
}
