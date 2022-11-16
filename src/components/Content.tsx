import * as Styled from '../Styled';
import { LinkObject } from '../types'

// pass in the information of an individual content block
// return the jsx for that content block
const Content = ( 
  {id, name, media, description, date, links}:
  {id: string, name: string, media: string, description: string, date: string, links: Array<LinkObject>}
) => {
  return (
    <Styled.Content id={id}>
      <Styled.FlexSpaceBetween>
        <Styled.ContentName>{name}</Styled.ContentName>
        <Styled.ContentDate>{date}</Styled.ContentDate>
      </Styled.FlexSpaceBetween>
      <Styled.FlexStart>
        <Styled.ContentMedia src={media}></Styled.ContentMedia>
        <Styled.FlexVertical>
          <Styled.ContentDescription>{description}</Styled.ContentDescription>
          <Styled.ContentLinks>
            {links.map(link => 
              <Styled.ContentLink key={id.concat(link.name.concat(link.url))} href={link.url}>
                {link.name}
              </Styled.ContentLink>
            )}
          </Styled.ContentLinks>
        </Styled.FlexVertical>
      </Styled.FlexStart>
    </Styled.Content>
  )
}

export default Content;