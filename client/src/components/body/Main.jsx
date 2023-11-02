import { IconButton } from '@mui/material';
import '../body/body.css';
import ChatCard from './ChatCard';
import Seperator from './Seperator';
import SendIcon from '@mui/icons-material/Send';
const Main = () => {
  return (
    <div className='main'>
      <header className='main-header'>
        <p>FRONT-END DEVELOPERS</p>
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
          <ChatCard />
          <Seperator />
        </section>
        <form className='send-message-form'>
          <input type='text' placeholder='Type a message' />
          <div
            className = 'send-button'
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
        </form>
      </main>
    </div>
  );
};

export default Main;
