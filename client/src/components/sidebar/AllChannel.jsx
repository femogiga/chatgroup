import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSidebarToShow } from '../../features/sidebar/sidebarSlice';
import { useChannelDataById } from '../../api/channelData';
const AllChannel = () => {
const dispatch = useDispatch()
  const sidebarToShow = useSelector((state) => state.sidebar.sidebarToShow)

  const handleGotoChannelList = (e) => {
    e.preventDefault()
    dispatch(setSidebarToShow(true))
  }

  
  return (
    <div className='channel-nav'>
      <Link
        onClick={handleGotoChannelList}
        className='flex gap-05 align-items--center  flow-1'>
        <NavigateBeforeIcon style={{ fontSize: '2rem' }} />
        <h3>All channels</h3>
      </Link>
    </div>
  );
};

export default AllChannel;
