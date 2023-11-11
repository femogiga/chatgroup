import { IconButton, easing } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useSelector, useDispatch } from 'react-redux';
import { setAddChannelButtonStatus } from '../../features/sidebar/sidebarSlice';

const AddChannel = () => {
  const dispatch = useDispatch();
  const handleOpenModal = (e) => {
    dispatch(setAddChannelButtonStatus(true));
  };

  return (
    <div className='sidebar-header shadow flex gap-05 align-items--center flow-1 space-between' style={{paddingInline:'1rem',marginTop:'1rem'}}>
      <h3>Channel</h3>
      <IconButton
        sx={{ backgroundColor: '#252329' }}
        onClick={(e) => handleOpenModal(e)}>
        <AddIcon
          style={{
            fontSize: '1.2rem',
            color: '#F2F2F2',
            fontWeight: 'bolder',
          }}
        />
      </IconButton>
    </div>
  );
};

export default AddChannel;
