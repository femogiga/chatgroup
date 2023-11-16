const MemberCard = ({ firstName, lastName, imgUrl }) => {
  
  return (
    <div
      className='flex gap-05 align-items--center flow-1'
      style={{ gap: '1.5rem' }}>
      <div className='photo-container flex align-items--center'>
        <img
          src={
            imgUrl ||
            'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=1600'
          }
        />
      </div>
      <p className='bold-500 font-gray'>{firstName + ' ' + lastName}</p>
    </div>
  );
};

export default MemberCard;
