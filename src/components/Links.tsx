import { links } from '../content';
import * as Styled from '../Styled';
import Link from './Link';

// return jsx for the links section
const Links = () => {
  return (
    <Styled.Links>
      {links.map(link => 
        <Link  key={link.name.concat(link.url)} url={link.url} name={link.name}/>
      )}
    </Styled.Links>
  )
}

export default Links