import { useSelector } from 'react-redux';
import Container from './components/Container';
import Main from './components/body/Main';
import Sidebar from './components/sidebar/Sidebar';
import SidebarList from './components/sidebar/SidebarList';
import CreateChannelModal from './components/body/CreateChannelModal';
import Login from './components/sidebar/Login';
import SidebarFooter from './components/sidebar/SidebarFooter';
import LoginModal from './components/body/LoginModal';
import ProfileModal from './components/body/ProfileModal';
import RegisterModal from './components/body/RegisterModal';
import MainBody from './components/body/MainBody';
import { useRef, useEffect } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';

function App() {
  // const parent = useRef(null)
  const [parent, enableAnimations] = useAutoAnimate();
  const sidebarToShow = useSelector((state) => state.sidebar.sidebarToShow);
  const profileModalStatus = useSelector(
    (state) => state.sidebar.profileModalStatus
  );
  const registerModalStatus = useSelector(
    (state) => state.sidebar.registerModalStatus
  );

  return (
    <div ref={parent}>
      <Container>
        {sidebarToShow ? <SidebarList /> : <Sidebar />}
        <MainBody />
        {/* <Main /> */}
        <CreateChannelModal />
        <LoginModal />
        {profileModalStatus && <ProfileModal />}
        {registerModalStatus && <RegisterModal />}
      </Container>
    </div>
  );
}

export default App;
