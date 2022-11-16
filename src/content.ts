/*
MODIFICATION INSTRUCTIONS

NAME
the big bold text displayed at the top of the page
any string here is fine

ABOUT
the text area below the big bold text displayed at the top of the page
any string here is fine

LINKS
the links on the top right corner of the page
to add a new link:
  add a new link object to the array
    link object:
      name: display name for link (string)
      url: url for link, 'none' for no link (string)

CONTENTS
the border separated content groups
to create a new content group:
  create a new contents object item with a name and array 
  create a new outline object item with the following:
    id: url name (string)
    name: display name (string)
    contents: referenced contents object (contents object)

CONTENT ITEM
the individual items in a content group
to add a new content item:
  create a new object inside the group array with the following:
    id: url name (string)
    name: display name (string)
    media: media path (put in build/media) (string)
    description: displayed description - try to have around 3 sentences (string)
    date: date of creation (string)
    links: any related links (array of link objects)
      link object:
        name: display name for link (string)
        url: url for link (string)
*/

/*
NAME
the big bold text displayed at the top of the page
returns jsx for the page title
*/
const name = 'BRIAN LIANG'

/*
ABOUT
the text area below the big bold text displayed at the top of the page
*/
const about = 'I am an undergrad at the University of Washington studying computer science.\nI will be updating my page frequently - stay tuned!';

/*
LINKS
the links on the top right corner of the page
*/
const links = [
  {
    name: 'liang.brin@gmail.com',
    url: 'none'
  },
  {
    name: 'github',
    url: 'https://github.com/brinliang'
  }
]

/*
CONTENTS
the border separated content groups

CONTENT ITEM
the individual items in a content group nested in "content_name: [{item}]"
*/
const contents = {

  projects: [
    {
      id: 'brianliang.dev',
      name: 'brianliang.dev',
      media: './resources/brianliang-dev/overview.gif',
      description: 'Simple website',
      date: 'October 2022',
      links: [
        {
          name: 'link', 
          url: 'https://brianliang.dev/'
        },
        {
          name: 'github', 
          url: 'https://github.com/brinliang/brinliang.github.io'
        }
      ]
    },
  ],
  
  writings: [
    {
      id: 'id',
      name: 'name',
      media: 'none',
      description: 'description',
      date: 'date',
      links: [
      {
        name: 'name',
        url: 'link',
      }
      ]
    },
  ],
  
}

/*
OUTLINE
used for reference in scripts - don't forget to update this!
*/
const outline = [
  {
    id: 'projects',
    name: 'projects',
    contents: contents.projects,
  },
  // {
  //   id: 'writings',
  //   name: 'writings',
  //   contents: contents.writings
  // }
]

export { name, about, links, contents, outline }