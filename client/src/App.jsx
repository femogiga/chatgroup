import Container from './components/Container';
import Main from './components/body/Main';
import Sidebar from './components/sidebar/Sidebar';
import SidebarList from './components/sidebar/SidebarList';

function App() {
  return (
    <div>
      <Container>
        {/* <Sidebar /> */}
        <SidebarList/>
        <Main />
      </Container>
    </div>
  );
}

export default App;
