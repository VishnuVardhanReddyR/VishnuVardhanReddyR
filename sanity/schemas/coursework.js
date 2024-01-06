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
      name: 'Courses',
      title: 'Courses',
      type: 'array',
      of: [{ 
        type:"reference", 
        to: {
          type: 'Courses'
        }
      }],
    },    
  ],
}