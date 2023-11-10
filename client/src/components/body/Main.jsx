import { IconButton } from '@mui/material';
import '../body/body.css';
import ChatCard from './ChatCard';
import Seperator from './Seperator';
import SendIcon from '@mui/icons-material/Send';
import { useChatData, useReformedData } from '../../api/chatData';
import { useChannelData } from '../../api/channelData';
import { useDispatch, useSelector } from 'react-redux';
import { useUserData } from './../../api/userData';
import { dateFormattter } from './../../utility/dateFormatter';
import { filterName, mapItem } from '../../utility/filterName';
import { useEffect } from 'react';
import io from 'socket.io-client';
import { clearInput, setInputValue } from '../../features/body/mainSlice';
import apiService from '../../utility/apiService';
import { useQueryClient } from '@tanstack/react-query';
import { useCreateChatMutation } from './../../api/chatData';

const Main = () => {
  const roomId = useSelector((state) => state.sidebar.roomId);
  const content = useSelector((state) => state.main.content);
  const dispatch = useDispatch();
  const { mutate, isLoading, error } = useCreateChatMutation();
  // console.log('chat input===>', content);

  const handleSendMessage = async () => {

    try {
      const data = {
        content: content,
        authorId: 1,
        roomId: roomId,
      };

       mutate(data);
      dispatch(clearInput({ fieldName: 'content' }));
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
    : channelData[roomId - 1].name.toUpperCase();

  const {
    isPending: isReformedDataPending,
    error: reformedError,
    data: reformedData,
  } = useReformedData();

  console.log('reformed====>', reformedData);

  //
  return (
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
                index > 0 &&
                dateFormattter(chat.createdAt) <
                  dateFormattter(chat[index - 1]?.createdAt) ? (
                  <>
                    <Seperator
                      chatDate={chat?.createdAt}
                      key={`sep_${index}`}
                    />
                    <ChatCard
                      key={`chat_${chat.id}`}
                      content={chat?.content}
                      firstName={chat?.firstname}
                      lastName={chat?.lastname}
                      messageDate={chat?.createdAt}
                      imgUrl={chat?.imgUrl}
                    />
                  </>
                ) : (
                  <ChatCard
                    key={`chats_${chat.id}`}
                    content={chat.content}
                    firstName={chat?.firstname}
                    lastName={chat?.lastname}
                    messageDate={chat.createdAt}
                    imgUrl={chat?.imgUrl}
                  />
                )
              )}
        </section>

        <section className='flow-2'>
          <Seperator />
        </section>

        <section className='flow-2'></section>
        <form
          className='send-message-form'
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
      </main>
    </div>
  );
};

export default Main;
