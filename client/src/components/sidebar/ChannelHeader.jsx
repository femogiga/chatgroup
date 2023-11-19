import { useSelector } from 'react-redux';
import { useChannelDataById } from '../../api/channelData';

const ChannelHeader = () => {
  const activeRoomId = useSelector((state) => state.sidebar.roomId);
  const { isPending, error, data } = useChannelDataById(activeRoomId);
  console.log('active room ====>', data);
  const channelName = isPending ? 'loading' : data?.name.toUpperCase();
  const channelDescription = isPending ? 'loading' : data?.description;
  return (
    <article style={{ marginTop: '1rem' }}>
      <p className='flow-1 bold-700'>{channelName}</p>
      <p className='flow-1'>{channelDescription}</p>
      
    </article>
  );
};

export default ChannelHeader;
