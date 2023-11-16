import { useSelector } from 'react-redux';
import { abbreviate } from '../../utility/abbreviation';
import { Link } from 'react-router-dom';
import { useCreateUserOnChannelMutation } from './../../api/userOnChannelData';

const ChannelCard = ({ title, onClick }) => {
  const roomId = useSelector((state) => state.sidebar.roomId);
  
  // const handleAddUserOnChannel = async () => {
  //   const data = { userId: parsedData.id, channelId: roomId };
  // };

  title = title || 'FRONTEND DEVELOPERS';
  return (
    <Link onClick={onClick}>
      <div className='flex gap-1 align-items--center flow-2'>
        <p
          className='flex place-item'
          style={{
            //   padding: '.2rem .3rem',
            backgroundColor: '#252329',
            width: '42px',
            height: '42px',
            borderRadius: '8px',
          }}>
          {abbreviate(title)}
        </p>
        <p>{title}</p>
      </div>
    </Link>
  );
};

export default ChannelCard;
