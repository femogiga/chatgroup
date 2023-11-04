import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setListToShow } from '../../features/sidebar/sidebarSlice';
const AllChannel = () => {
const dispatch = useDispatch()
const listToShow = useSelector((state)=>state.sidebar.listToShow)
  const handleGotoChannelList = (e) => {
    e.preventDefault()
    dispatch(setListToShow(true))
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
