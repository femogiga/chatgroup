import MemberCard from './MemberCard';
import '../sidebar/sidebar.css';
import ChannelHeader from './ChannelHeader';
import Login from './Login';
import { Link } from 'react-router-dom';
import AllChannel from './AllChannel';
import Account from './Account';
import { useSelector } from 'react-redux';
import { useUserOnChannelDataById } from '../../api/userOnChannelData';

const Sidebar = () => {
  const activeRoom = useSelector((state) => state.sidebar.roomId);
  const { isPending, error, data } = useUserOnChannelDataById(activeRoom);

  console.log('users', data);

  return (
    <aside className='sidebar' style={{ paddingInline: '1rem' }}>
      <AllChannel />
      <div className='sidebar-body'>
        <ChannelHeader />
        {/* <ChannelListHeader/> */}
        <article className=''>
          <p className='flow-1 bold-700'>MEMBERS</p>
          <div className='member-cont'>
            {data &&
              data.map((person) => (
                <MemberCard
                  key={`person_${person.user.id}`}
                  firstName={person?.user?.firstname}
                  lastName={person?.user?.lastname}
                />
              ))}
            {/* <MemberCard />
            <MemberCard />
            <MemberCard />
            <MemberCard />
            <MemberCard />
            <MemberCard /> */}
          </div>
        </article>
      </div>
      <footer className='sidebar-footer'>
        <Login />
      </footer>
    </aside>
  );
};

export default Sidebar;
