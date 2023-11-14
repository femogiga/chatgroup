import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import FilterHdrOutlinedIcon from '@mui/icons-material/FilterHdrOutlined';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setLoginModalStatus, setProfileModalStatus } from '../../features/sidebar/sidebarSlice';

const Account = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginStatus = useSelector((state) => state.sidebar.loginlogoutstatus);
  const loginModalStatus = useSelector(
    (state) => state.sidebar.loginModalStatus
  );
  const parsedData = localStorage.getItem('userData');
  const handleLoginClick = () => {
    if (loginStatus) {
      // navigate('/login')
      dispatch(setLoginModalStatus(true));
      return;
    }
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    localStorage.removeItem('userData');
    localStorage.removeItem('token');
    location.reload();
  };

  const handleMyProfileLink = (e) => {
        e.preventDefault();
      dispatch(setProfileModalStatus(true))
  }
  return (
    <div className='account' style={{ backgroundColor: '#252329' }}>
      <div className='flow-1' style={{ color: 'white' }}>
        <Link
          className='flex gap-1 account-modal'
          onClick={handleMyProfileLink}>
          <AccountCircleIcon sx={{ color: 'white' }} />
          <p>My Profile</p>
        </Link>
      </div>

      <div className='flow-1 account-modal' style={{ color: 'white' }}>
        <Link className='flex gap-1'>
          <FilterHdrOutlinedIcon />
          <p>Tweeter</p>
        </Link>
      </div>
      <hr />
      <div className='account-modal logout'>
        <Link onClick={handleLogout} className='flex gap-1'>
          <LogoutIcon sx={{ color: '#EB5757' }} />
          <p>{parsedData ? 'Logout' : 'Login'}</p>
        </Link>
      </div>
    </div>
  );
};

export default Account;
