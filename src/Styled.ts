import styled from 'styled-components';

// navigation
const Nav = styled.div`
  float: left;
  width: 195px;
  height: 100%;
  overflow: auto;
  border-right: 5px solid black;
`

const NavLink = styled.a`
  text-decoration: none;
  color: black;
`

const NavGroup = styled.ul`
  list-style: none;
  margin: 0px;
  padding: 0px;
`

const NavItem = styled.li`
  margin: 15px 40px 15px 40px;
  font-size: 18px;
`

const NavSubItem = styled.li`
  margin: 15px 40px 15px 60px;
  font-size: 15px;
`

const NavSpacer = styled.div`
  margin-top: 40px;
`

const NavButton = styled.span`
  margin-left: 5px;
  &:hover {
    cursor: pointer
  }
`

// page 
const Main = styled.div`
  float: left;
  width: calc(100% - 200px);
  height: 100%;
  overflow: auto;
  white-space: pre-line;
`

const Name = styled.div`
  font-size: 56px;
  font-weight: bold;
  margin: 60px 60px 30px 60px;
  display: flex;
  flex-flow: row wrap;
`

const About = styled.div`
  font-size: 20px;
  scroll-margin-top: 20px;
  margin: 30px 60px 60px 60px;
`

const Links = styled.div`
  font-size: 15px;
  display: flex;
  flex-direction: column;
  text-align: left;
  align-self: center;
`

const Link = styled.a`
  text-decoration: none;
  color: blue;
  margin: 5px 60px 5px 60px;
`

const LinkNone = styled.span`
  text-decoration: none;
  color: black;
  margin: 5px 60px 5px 60px;
`

const NameFirstLetter = styled.div`
  margin-right: 20px;
  &::first-letter {
    font-size: 1.5em;
    font-weight: normal;
  }
`

// flex
const FlexSpaceBetween = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`

const FlexVertical = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-basis: 60%;
  flex-grow: 0;
`

const FlexStart = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: start;
`

// projects
const ContentsHeading = styled.div`
  padding: 20px 60px 20px 60px;
  font-size: 32px;
  border-top: 5px solid black;
  font-weight: bold;
  &::first-letter {
    font-size: 1.5em;
    font-weight: normal;
  }
`

const Contents = styled.div`
`

const Content = styled.div`
  border-top: 1px solid black;
  font-size: 20px;
  padding: 20px 60px 20px 60px;
`

const ContentName = styled.span`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`

const ContentDescription = styled.div`
  margin-top: 10px;
`

const ContentLinks = styled.div`
  margin: 10px 0px 10px 0px;
`

const ContentLink = styled.a`
  text-decoration: none;
  color: blue;
  margin-right: 20px;
`

const ContentMedia = styled.img`
  border: 1px solid black;
  height: 200px;
  width: 150px;
  margin: 10px 60px 10px 0px;
`

const ContentDate = styled.div`
  font-style: italic;
  margin-bottom: 10px;
`


export { 
  Nav, NavLink, NavGroup, NavItem, NavSubItem, NavSpacer, NavButton, 
  Main, Name, About, Links, Link, LinkNone, NameFirstLetter, 
  FlexSpaceBetween, ContentDate, FlexVertical, FlexStart, 
  ContentsHeading, Contents, Content, ContentName, ContentMedia, ContentDescription, ContentLinks, ContentLink
}