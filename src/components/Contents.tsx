import { contents } from '../content'
import Content from './Content';
import { ContentObject } from '../types';
import * as Styled from '../Styled';

// pass in the id, name, and content of a content group
// return the jsx for the heading and contents for that group
const Contents = (
  {groupId, groupName, groupContent}:
  {groupId: string, groupName: string, groupContent: Array<ContentObject>}
) => {
  return (
    <>
      <Styled.ContentsHeading id={groupId}>{groupName.toUpperCase()}</Styled.ContentsHeading>
      <Styled.Contents>
        {groupContent.map(content => 
          <Content 
            key={content.id} 
            id={content.id} 
            name={content.name}
            media={content.media} 
            description={content.description} 
            date={content.date}
            links={content.links} 
          />
        )}
      </Styled.Contents>
    </>
  )
}

export default Contents