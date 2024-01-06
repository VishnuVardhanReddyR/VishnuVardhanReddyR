export default {
  name: 'intro',
  title: 'Intro',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'typingTitle',
      title: 'Typing Titles',
      type: 'array',
      of: [{ 
        type:"reference", 
        to: {
          type: 'typing'
        }
      }],
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
