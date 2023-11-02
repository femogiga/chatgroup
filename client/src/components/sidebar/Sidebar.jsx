import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import MemberCard from './MemberCard';
import '../sidebar/sidebar.css';
import ChannelHeader from './ChannelHeader';
import Login from './Login';

const Sidebar = () => {
  return (
    <aside className='sidebar' style={{ paddingInline: '1rem' }}>
      <div className='channel-nav flex gap-05 align-items--center flow-1'>
        <NavigateBeforeIcon style={{ fontSize: '2rem' }} />
        <h3>All channels</h3>
      </div>
      <div className='sidebar-body'>
        <ChannelHeader />
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
