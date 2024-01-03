import { type SchemaTypeDefinition } from 'sanity'
import about from './schemas/about';
import contact from './schemas/contact';
import coursework from './schemas/coursework';
import graduationCoursework from './schemas/graduationCoursework';
import underGraduationCoursework from './schemas/underGraduationCoursework';
import portfolio from './schemas/portfolio';
import resume from './schemas/resume';
import skill from './schemas/skill';

console.log("sanity.ts", process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [about, contact, coursework, graduationCoursework, underGraduationCoursework, portfolio, resume, skill ],
}
