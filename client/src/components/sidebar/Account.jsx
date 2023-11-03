import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import FilterHdrOutlinedIcon from '@mui/icons-material/FilterHdrOutlined';
import { Link } from 'react-router-dom';

const Account = () => {
  return (
    <div className='account' style={{ backgroundColor: '#252329' }}>
      <div className='flow-1'>
        <Link className='flex gap-1 account-modal'>
          <AccountCircleIcon sx={{ color: 'white' }} />
          <p>My Profile</p>
        </Link>
      </div>

      <div className='flow-1 account-modal'>
        <Link className='flex gap-1'>
          <FilterHdrOutlinedIcon sx={{ color: 'white' }} />
          <p>Tweeter</p>
        </Link>
      </div>
      <hr />
      <div className='account-modal logout'>
        <Link className='flex gap-1'>
          <LogoutIcon sx={{ color: '#EB5757' }} />
          <p>Logout</p>
        </Link>
      </div>
    </div>
  );
};

export default Account;
