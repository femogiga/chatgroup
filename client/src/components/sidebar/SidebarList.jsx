import MemberCard from './MemberCard';
import '../sidebar/sidebar.css';
import ChannelHeader from './ChannelHeader';
import Login from './Login';
import AddIcon from '@mui/icons-material/Add';
import { IconButton } from '@mui/material';
import ChannelListHeader from './ChannelListHeader';
import ChannelCard from './ChannelCard';

const SidebarList = () => {
  return (
    <aside className='sidebar' style={{ paddingInline: '1rem' }}>
      <div className='channel-nav flex gap-05 align-items--center flow-1 space-between'>
        <h3>Channel</h3>
        <IconButton sx={{ backgroundColor: '#252329' }}>
          <AddIcon
            style={{
              fontSize: '1.2rem',
              color: '#F2F2F2',
              fontWeight: 'bolder',
            }}
          />
        </IconButton>
      </div>

      <div className='sidebar-body'>
        <ChannelListHeader />
        <article className=''>
          <div className='member-cont'>
            {/* <MemberCard />
            <MemberCard />
            <MemberCard />
            <MemberCard />
            <MemberCard />
            <MemberCard /> */}
            <ChannelCard title={'FRONTEND DEVELOPER'} />
            <ChannelCard title={'RANDOM'} />
            <ChannelCard title={'BACK END'} />
            <ChannelCard title={'CATS AND DOGS'} />
            <ChannelCard title={'WELCOME'} />
          </div>
        </article>
      </div>
      <footer>
        <Login />
      </footer>
    </aside>
  );
};

export default SidebarList;
