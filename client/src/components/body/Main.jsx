import { IconButton } from '@mui/material';
import '../body/body.css';
import ChatCard from './ChatCard';
import Seperator from './Seperator';
import SendIcon from '@mui/icons-material/Send';
import { useChatData } from '../../api/chatData';
import { useChannelData } from '../../api/channelData';
import { useSelector } from 'react-redux';
const Main = () => {
  const roomId = useSelector((state) => state.sidebar.roomId);
  const {
    isPending: isChatPending,
    error: chatError,
    data: chatData,
  } = useChatData();
  const {
    isPending: isChannelPending,
    error: channelError,
    data: channelData,
  } = useChannelData();
  console.log('chat====>', chatData);
  console.log('channel====>', channelData);
  const channelName = isChannelPending
    ? 'Pending'
    : channelData[roomId - 1].name.toUpperCase();

  return (
    <div className='main'>
      <header className='main-header'>
        <p>{channelName}</p>
      </header>
      <main className='main-body' style={{ padding: '3rem' }}>
        <section className='flow-2'>
          <ChatCard />
          <ChatCard />
          <ChatCard />
          <ChatCard />
          <Seperator />
        </section>

        <section className='flow-2'>
          <ChatCard />
          <ChatCard />
          <ChatCard />
          {/* <ChatCard /> */}
          <Seperator />
        </section>

        <section className='flow-2'>
          <ChatCard />
          <ChatCard />
          <ChatCard />
          {/* <ChatCard /> */}
          <Seperator />
        </section>
        <form className='send-message-form'>
          <div className='absolute-cont'>
            <input type='text' placeholder='Type a message' />
            <div
              className='send-button'
              style={{
                backgroundColor: '#2F80ED',
                width: '39px',
                height: '39px',
                borderRadius: '8px',
              }}>
              <IconButton sx={{ color: 'white' }}>
                <SendIcon />
              </IconButton>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Main;
