import { useState } from 'react';
import * as Styled from '../Styled';
import { ContentObject } from '../types';

// return expandable navigation blocks
const NavContents = (
  {id, name, contents}:
  {id: string, name: string, contents: Array<ContentObject> }
) => {
  const [ expand, setExpand ] = useState(false);

  return (
    <>
      <Styled.NavItem>
        <Styled.NavLink href={'#'.concat(id)}>{name}</Styled.NavLink>
        <Styled.NavButton onClick={() => setExpand(!expand)}>
          {expand ? '△' : '▽'}
        </Styled.NavButton>
      </Styled.NavItem>
      {
        expand && 
        <Styled.NavGroup>
          {contents.map(content => 
            <Styled.NavSubItem key={content.id}>
              <Styled.NavLink href={'#'.concat(content.id)}>{content.name}</Styled.NavLink>
            </Styled.NavSubItem>
          )}
        </Styled.NavGroup>
      }
    </>
  )
}

export default NavContents;