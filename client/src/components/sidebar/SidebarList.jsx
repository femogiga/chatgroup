import '../sidebar/sidebar.css';
import Login from './Login';
import Search from './Search';
import ChannelCard from './ChannelCard';
import AddChannel from './AddChannel';
import { useChannelData } from '../../api/channelData';
import { useDispatch } from 'react-redux';
import {
  setSidebarToShow,
  setRoomId,
} from '../../features/sidebar/sidebarSlice';
import { useCreateUserOnChannelMutation } from '../../api/userOnChannelData';

const SidebarList = () => {
  const { isPending, error, data } = useChannelData();
  const dispatch = useDispatch();
  const {
    isLoading,
    isSuccess,
    error: userOnChannelError,
    mutate,
  } = useCreateUserOnChannelMutation();
  const userIdFromStorage = localStorage.getItem('userData');
  const parsedData = JSON.parse(userIdFromStorage);
  console.log('data ====>', data);
  return (
    <aside className='sidebar' style={{ paddingInline: '0rem' }}>
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
                      e.preventDefault();

                      dispatch(setRoomId(channel.id));
                      dispatch(setSidebarToShow(false));
                      mutate({ userId: parsedData.id, channelId: channel.id });
                    }}
                  />
                ))}
          </div>
        </article>
      </div>
      <footer className='sidebar-footer'>
        <Login />
      </footer>
    </aside>
  );
};

export default SidebarList;
