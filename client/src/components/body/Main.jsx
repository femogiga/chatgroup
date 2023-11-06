import { IconButton } from '@mui/material';
import '../body/body.css';
import ChatCard from './ChatCard';
import Seperator from './Seperator';
import SendIcon from '@mui/icons-material/Send';
import { useChatData, useReformedData } from '../../api/chatData';
import { useChannelData } from '../../api/channelData';
import { useSelector } from 'react-redux';
import { useUserData } from './../../api/userData';
import { dateFormattter } from './../../utility/dateFormatter';
import { filterName, mapItem } from '../../utility/filterName';
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
  const {
    isPending: isUserPending,
    error: userError,
    data: userData,
  } = useUserData();

  console.log('chat====>', chatData);
  console.log('channel====>', channelData);
  console.log('userData====>', userData);
  const channelName = isChannelPending
    ? 'Pending'
    : channelData[roomId - 1].name.toUpperCase();

  const {
    isPending: isReformedDataPending,
    error: reformedError,
    data: reformedData,
  } = useReformedData();

  return (
    //   <div className='main'>
    //     <header className='main-header'>
    //       <p>{channelName}</p>
    //     </header>
    //     <main className='main-body' style={{ padding: '3rem' }}>
    //       <section className='flow-2'>
    //         {chatData &&
    //           chatData
    //             .filter((item) => item.roomId === roomId)
    //             .map((chat, index) =>
    //               dateFormattter(chatData[index].createdAt) !==
    //               dateFormattter(chatData[index - 1]?.createdAt) ? (
    //                 <>
    //                   <Seperator chatDate={chatData[index]?.createdAt} />
    //                   <ChatCard
    //                     key={`chat_${chat.id}`}
    //                     content={chat?.content}
    //                     firstName={userData[chat?.authorId]?.firstname}
    //                     lastName={userData[chat?.authorId]?.lastname}
    //                     messageDate={chat?.createdAt}
    //                   />
    //                 </>
    //               ) : (
    //                 <ChatCard
    //                   key={`chat_${chat.id}`}
    //                   content={chat.content}
    //                   firstName={userData[chat?.authorId]?.firstname}
    //                   lastName={userData[chat?.authorId]?.lastname}
    //                   messageDate={chat.createdAt}
    //                 />

    //               )
    //             )}

    //         {/* <ChatCard />
    //         <ChatCard />
    //         <ChatCard />
    //         <Seperator /> */}
    //       </section>

    //       <section className='flow-2'>
    //         {/* <ChatCard />
    //         <ChatCard />
    //         <ChatCard /> */}
    //         {/* <ChatCard /> */}
    //         <Seperator />
    //       </section>

    //       <section className='flow-2'>
    //         {/* <ChatCard />
    //         <ChatCard />
    //         <ChatCard />
    //         <ChatCard />
    //         <Seperator /> */}
    //       </section>
    //       <form className='send-message-form'>
    //         <div className='absolute-cont'>
    //           <input type='text' placeholder='Type a message' />
    //           <div
    //             className='send-button'
    //             style={{
    //               backgroundColor: '#2F80ED',
    //               width: '39px',
    //               height: '39px',
    //               borderRadius: '8px',
    //             }}>
    //             <IconButton sx={{ color: 'white' }}>
    //               <SendIcon />
    //             </IconButton>
    //           </div>
    //         </div>
    //       </form>
    //     </main>
    //   </div>
    // );

    <div className='main'>
      <header className='main-header'>
        <p>{channelName}</p>
      </header>
      <main className='main-body' style={{ padding: '3rem' }}>
        <section className='flow-2'>
          {reformedData &&
            reformedData
              .filter((item) => item.roomId === roomId)
              .map((chat, index) =>
                dateFormattter(chat.createdAt) <
                dateFormattter(chat[index - 1]?.createdAt) ? (
                  <>
                    <Seperator chatDate={chat?.createdAt} />
                    <ChatCard
                      key={`chat_${chat.id}`}
                      content={chat?.content}
                      firstName={chat?.firstname}
                      lastName={chat?.lastname}
                      messageDate={chat?.createdAt}
                    />
                  </>
                ) : (
                  <ChatCard
                    key={`chat_${chat.id}`}
                    content={chat.content}
                    firstName={chat?.firstname}
                    lastName={chat?.lastname}
                    messageDate={chat.createdAt}
                  />
                )
              )}

          {/* <ChatCard />
          <ChatCard />
          <ChatCard />
          <Seperator /> */}
        </section>

        <section className='flow-2'>
          {/* <ChatCard />
          <ChatCard />
          <ChatCard /> */}
          {/* <ChatCard /> */}
          <Seperator />
        </section>

        <section className='flow-2'>
          {/* <ChatCard />
          <ChatCard />
          <ChatCard />
          <ChatCard />
          <Seperator /> */}
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
