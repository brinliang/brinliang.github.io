import { about } from '../content';
import * as Styled from '../Styled';

// return jsx for the about section
const About = () => {
  return (
    <Styled.About id='about'>{about}</Styled.About>
  )
}

export default About