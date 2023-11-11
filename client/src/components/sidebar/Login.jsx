import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import { Link } from 'react-router-dom';
import Account from './Account';
import { useSelector, useDispatch } from 'react-redux';
import { setAccountModalVisible } from '../../features/sidebar/sidebarSlice';

const Login = () => {
  const accountModalVisible = useSelector(
    (state) => state.sidebar.accountModalVisible
  );
  const dispatch = useDispatch();
  const handleAccountClick = () => {
    dispatch(setAccountModalVisible());
  };

  const dataFromLocalStorage = localStorage.getItem('userData');
  // console.log('datafromstorage===>',dataFromLocalStorage.userData)
   const parsedData = JSON.parse(dataFromLocalStorage);
  return (
    <div className='' style={{ height: '100%' }}>
      <Link onClick={handleAccountClick}>
        <article
          className='login flex  space-between '
          style={{ backgroundColor: '#0B090C', color: 'white' }}>
          <div className='flex gap-05 align-items--center flow-1'>
            <div className='photo-container flex align-items--center'>
              <img
                src={
                  parsedData?.imgUrl ||
                  'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=1600'
                }
              />
            </div>
            <p className='bold-500'>{`${parsedData?.firstname}  ${parsedData?.lastname} `}</p>
          </div>
          <p style={{ alignSelf: 'center' }}>
            <KeyboardArrowDownSharpIcon />
          </p>
        </article>
      </Link>
      {accountModalVisible && <Account />}
    </div>
  );
};

export default Login;
