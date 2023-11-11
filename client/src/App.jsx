import { useSelector } from 'react-redux';
import Container from './components/Container';
import Main from './components/body/Main';
import Sidebar from './components/sidebar/Sidebar';
import SidebarList from './components/sidebar/SidebarList';
import CreateChannelModal from './components/body/CreateChannelModal';
import Login from './components/sidebar/Login';
import SidebarFooter from './components/sidebar/SidebarFooter';
import LoginModal from './components/body/LoginModal';

function App() {
  const sidebarToShow = useSelector((state) => state.sidebar.sidebarToShow);
  const loginModalStatus= useSelector((state)=>state.sidebar.loginModalStatus)
  return (
    // <div>
    //   <Container>
    //     {sidebarToShow ? <SidebarList /> : <Sidebar />}
    //     <Main />
    //   </Container>
    //   <CreateChannelModal />
    // </div>

    <Container>
      {sidebarToShow ? <SidebarList /> : <Sidebar />}


      <Main />
      <CreateChannelModal />
      <LoginModal/>
    </Container>
  );
}


export default App
