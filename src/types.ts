// structure for links
type LinkObject = {
  name: string;
  url: string;
}

// structure for individual content blocks
type ContentObject = {
  id: string;
  name: string;
  media: string;
  description: string;
  date: string;
  links: Array<LinkObject>;
}

export { LinkObject, ContentObject }