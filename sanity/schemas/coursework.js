export default {
  name: 'coursework',
  title: 'Coursework',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'graduationCourses',
      title: 'Graduation Courses',
      type: 'array',
      of: [{ 
        type:"reference", 
        to: {
          type: 'graduationCoursework'
        }
      }],
    },  
    {
      name: 'underGraduationCourses',
      title: 'Under-Graduation Courses',
      type: 'array',
      of: [{ 
        type:"reference", 
        to: {
          type: 'underGraduationCoursework'
        }
      }],
    },  
  ],
}