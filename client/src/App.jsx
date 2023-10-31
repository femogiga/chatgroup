import Container from './components/Container';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import Header from './components/Sidebar';

function App() {
  return (
    <div>
      <Container>
        <Sidebar />
        <Main/>
      </Container>
    </div>
  );
}

export default App;
