import { useState } from 'react';
import { outline } from '../content';
import NavContents from './NavContents';
import * as Styled from '../Styled';

// return the jsx for the sidebar
const Navbar = () => {
  /*
  The navbar is contained inside the sidebar container (Nav).
  The navbar is a list (NavGroup), with each list element being made up of a list element (NavItem) and link (NavLink).
  Sublists of the content can be generated from array mappings and conditionally rendered (NavGroup -> NavSubItem).
  */
  return (
    <Styled.Nav>
      <Styled.NavSpacer></Styled.NavSpacer>
      <Styled.NavGroup>
        <Styled.NavItem><Styled.NavLink href="#home">HOME</Styled.NavLink></Styled.NavItem>
        <Styled.NavItem><Styled.NavLink href="#about">ABOUT</Styled.NavLink></Styled.NavItem>
        {outline.map(info => <NavContents key={info.name.concat(info.id)} id={info.id} name={info.name.toUpperCase()} contents={info.contents} />)}
      </Styled.NavGroup>
    </Styled.Nav>
  )
}

export default Navbar;