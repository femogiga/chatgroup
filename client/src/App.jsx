import { useSelector } from 'react-redux';
import Container from './components/Container';
import Main from './components/body/Main';
import Sidebar from './components/sidebar/Sidebar';
import SidebarList from './components/sidebar/SidebarList';
import CreateChannelModal from './components/body/CreateChannelModal';

function App() {
  const sidebarToShow = useSelector((state) => state.sidebar.sidebarToShow);

  return (
    <div>
      <Container>
        {sidebarToShow ? <SidebarList /> : <Sidebar />}
        <Main />
      </Container>
      {/* <CreateChannelModal/> */}
    </div>
  );
}

export default App;
