import MemberCard from './MemberCard';
import '../sidebar/sidebar.css';
import ChannelHeader from './ChannelHeader';
import Login from './Login';
import { Link } from 'react-router-dom';
import AllChannel from './AllChannel';
import ChannelListHeader from './ChannelListHeader';

const Sidebar = () => {
  return (
    <aside className='sidebar' style={{ paddingInline: '1rem' }}>
      <AllChannel  />
      <div className='sidebar-body'>
        <ChannelHeader />
        {/* <ChannelListHeader/> */}
        <article className=''>
          <p className='flow-1 bold-700'>MEMBERS</p>
          <div className='member-cont'>
            <MemberCard />
            <MemberCard />
            <MemberCard />
            <MemberCard />
            <MemberCard />
            <MemberCard />
          </div>
        </article>
      </div>
      <footer>
        <Login />
      </footer>
    </aside>
  );
};

export default Sidebar;
