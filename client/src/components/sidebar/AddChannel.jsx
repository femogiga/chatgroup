import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const AddChannel = () => {
  return (
    <div className='sidebar-header shadow flex gap-05 align-items--center flow-1 space-between'>
      <h3>Channel</h3>
      <IconButton sx={{ backgroundColor: '#252329' }}>
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
