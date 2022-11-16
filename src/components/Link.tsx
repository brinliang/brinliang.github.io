import { links } from '../content';
import * as Styled from '../Styled';

// return jsx for an individual link in the links section
const Link = ( {url, name}: {url: string, name: string} ) => {
  // conditionally render the links section - links with and without urls
  if (url === 'none') {
    return (
      <Styled.LinkNone>
        {name}
      </Styled.LinkNone>
    )
  } else {
    return (
      <Styled.Link href={url}>
        {name}
      </Styled.Link>
    )
  }
}

export default Link