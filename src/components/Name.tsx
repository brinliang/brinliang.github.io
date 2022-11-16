import { name } from '../content';
import * as Styled from '../Styled'

// return jsx for the page title
const Name = () => {
  return (
    <Styled.Name id='name'>
      {name.split(' ').map((word, index) => <Styled.NameFirstLetter key={index}>{word}</Styled.NameFirstLetter>)}
    </Styled.Name>
  )
}

export default Name