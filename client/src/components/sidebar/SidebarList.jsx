import '../sidebar/sidebar.css';
import Login from './Login';
import Search from './Search';
import ChannelCard from './ChannelCard';
import AddChannel from './AddChannel';
import { useChannelData } from '../../api/channelData';
import { useDispatch } from 'react-redux';
import { setSidebarToShow, setRoomId } from '../../features/sidebar/sidebarSlice';

const SidebarList = () => {
  const { isPending, error, data } = useChannelData();
  const dispatch = useDispatch();

  console.log('data ====>', data);
  return (
    <aside className='sidebar' style={{ paddingInline: '1rem' }}>
      <AddChannel />

      <div className='sidebar-body'>
        <Search />
        <article className=''>
          <div className='member-cont'>
            {isPending
              ? 'Loading...'
              : data.map((channel) => (
                  <ChannelCard
                    key={channel?.id}
                    title={channel?.name.toUpperCase()}
                  onClick={(e) => {
                      e.preventDefault()
                    dispatch(setRoomId(channel.id));
                    dispatch(setSidebarToShow(false))
                    }}
                  />
                ))}
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
