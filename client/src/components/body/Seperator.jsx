import { dateFormattter } from './../../utility/dateFormatter';

const Seperator = ({ chatDate }) => {
  return (
    <div
      className='flex gap-1 align-items--center flow-1'
      style={{ margin: '0 auto', color: '#828282' }}>
      <hr />
      <p>{dateFormattter(chatDate)}</p>
      <hr />
    </div>
  );
};

export default Seperator;
