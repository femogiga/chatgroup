import Container from './components/Container';
import Main from './components/Main';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div>
      <Container>
        <Sidebar/>
        <Main/>
      </Container>
    </div>
  );
}

export default App;
