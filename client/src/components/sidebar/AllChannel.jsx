import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { Link } from 'react-router-dom';
const AllChannel = () => {
  return (
    <Link>
      <div className='channel-nav flex gap-05 align-items--center flow-1'>
        <NavigateBeforeIcon style={{ fontSize: '2rem' }} />
        <h3>All channels</h3>
      </div>
    </Link>
  );
};

export default AllChannel;
