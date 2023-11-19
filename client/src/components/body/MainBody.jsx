import { IconButton } from '@mui/material';

import '../body/body.css';
import ChatCard from './ChatCard';
import Seperator from './Seperator';
import SendIcon from '@mui/icons-material/Send';
import {
  useChatData,
  useGroupedChatData,
  useReformedData,
} from '../../api/chatData';
import { useChannelData } from '../../api/channelData';
import { useDispatch, useSelector } from 'react-redux';
import { useUserData } from '../../api/userData';
import { dateFormattter } from '../../utility/dateFormatter';
import { useEffect, React } from 'react';
import io from 'socket.io-client';
import { clearInput, setInputValue } from '../../features/body/mainSlice';
import apiService from '../../utility/apiService';
import { useQueryClient } from '@tanstack/react-query';
import { useCreateChatMutation } from '../../api/chatData';
import { setLoginModalStatus } from '../../features/sidebar/sidebarSlice';
import { useRef } from 'react';


const MainBody = () => {
  const messagesEndRef = useRef(null);
  const roomId = useSelector((state) => state.sidebar.roomId);
  const content = useSelector((state) => state.main.content);
  const dispatch = useDispatch();
  const { mutate, isLoading, error } = useCreateChatMutation();
  // console.log('chat input===>', content);
  const user = localStorage.getItem('userData');
  const isAuthenticated = user !== null;
  if (!isAuthenticated) {
    dispatch(setLoginModalStatus(true));
    return null;
  }
 const scrollToBottom = () => {
   if (messagesEndRef.current) {
     messagesEndRef.current.scrollIntoView({
       behavior: 'smooth',
       block: 'end',
       inline: 'nearest',
     });
   }
 };

  useEffect(() => {
    scrollToBottom()
  },[content])

  const handleSendMessage = async () => {
    try {
      const parsedUser = await JSON.parse(user);
      const dataToSend = {
        content: content,
        authorId: parsedUser?.id,
        roomId: roomId,
      };

      const result = await mutate(dataToSend);
      // if (result.error) {
      //   return;
      // }
     await dispatch(clearInput({ fieldName: 'content' }));
     await scrollToBottom()
    } catch (err) {
      console.error(err);
    }
  };

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
  console.log('roomId===', roomId);

  console.log('chat====>', chatData);
  console.log('channel====>', channelData);
  console.log('userData====>', userData);
  const channelName = isChannelPending
    ? 'Pending'
    : channelData && channelData[roomId - 1]?.name.toUpperCase();

  const {
    isPending: isReformedDataPending,
    error: reformedError,
    data: groupedData,
  } = useGroupedChatData();

  console.log('grouped====>', groupedData);


  return (
    <div className='main' >
      <header className='main-header'>
        <p>{channelName}</p>
      </header>
      <main className='main-body' style={{ padding: '3rem' }}>
        <section className='flow-2'>
          {groupedData &&
            groupedData.map((item, index) => (
              <>
                <div key={`group_${index}`}>
                  {/* { <Seperator chatDate={item.date} key={`sep_${item.date}`} />} */}
                  {item.chat
                    .filter((group) => roomId === group.roomId)
                    .map((chat) => (
                      <ChatCard
                        key={`chat_${chat.id}`}
                        content={chat.content}
                        firstName={chat.firstname}
                        lastName={chat.lastname}
                        messageDate={chat.createdAt}
                        imgUrl={chat.imgUrl}
                      />
                    ))}
                </div>
              </>
            ))}
          <div ref={messagesEndRef} />
        </section>
      </main>
      <footer>
        <form
          className='main-footer send-message-form'
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
            // dispatch(clearInput({fieldName:'content'}))
          }}>
          <div className='absolute-cont'>
            <input
              type='text'
              placeholder='Type a message'
              name='content'
              value={content}
              onChange={(e) =>
                dispatch(
                  setInputValue({ fieldName: 'content', value: e.target.value })
                )
              }
            />
            <div
              className='send-button'
              style={{
                backgroundColor: '#2F80ED',
                width: '39px',
                height: '39px',
                borderRadius: '8px',
              }}>
              <IconButton type='submit' sx={{ color: 'white' }}>
                <SendIcon />
              </IconButton>
            </div>
          </div>
        </form>
      </footer>
    </div>
  );
};

export default MainBody;
