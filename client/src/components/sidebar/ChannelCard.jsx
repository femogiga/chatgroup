import { abbreviate } from '../../utility/abbreviation';
import { Link } from 'react-router-dom';

const ChannelCard = ({ title }) => {
  title = title || 'FRONTEND DEVELOPERS';
  return (
    <Link>
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
