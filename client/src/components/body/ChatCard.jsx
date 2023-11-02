const ChatCard = () => {
  return (
    <article className='chat-card flow-2'>
      <div className='flex gap-1'>
        <div className='photo-container flex'>
          <img src='https://images.pexels.com/photos/262391/pexels-photo-262391.jpeg?auto=compress&cs=tinysrgb&w=1600' />
        </div>
        <div>
          <div>
            <div className='flex gap-1 text-light-gray align-items--center'>
              <p className=''>Neille Francis</p>
              <p style={{ fontSize: '.75rem' }}>yesterday at 2:29AM</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. sequi eum
              nobis .
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ChatCard;
