import Navbar from './components/Navbar';
import Name from './components/Name';
import About from './components/About';
import Links from './components/Links';
import Contents from './components/Contents';
import { contents, outline } from './content';
import * as Styled from './Styled';

const App = () => {
  return (
    <>
      <Navbar />
      <Styled.Main>
        <div id='home'></div>
        <Styled.FlexSpaceBetween>
          <Name />
          <Links />
        </Styled.FlexSpaceBetween>
        <About />
        {outline.map(info => <Contents key={info.id.concat(info.name)} groupId={info.id} groupName={info.name} groupContent={info.contents} />)}
      </Styled.Main>
    </>
  )
}

export default App;