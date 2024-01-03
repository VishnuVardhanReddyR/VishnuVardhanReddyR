export default{
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      }
    },
    {
      name: "contact",
      title: "Contact",
      type: "array",
      of: [{ 
        type:"reference", 
        to: {
          type: 'contact'
        }
      }],
    }
  ],
}
