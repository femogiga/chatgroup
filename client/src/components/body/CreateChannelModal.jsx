import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { setAddChannelButtonStatus } from '../../features/sidebar/sidebarSlice';

function CreateChannelModal() {
  const dispatch = useDispatch();
  const addChannelButtonStatus = useSelector(
    (state) => state.sidebar.addChannelButtonStatus
  );
  // const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  const handleOpenModal = (e) => {
    // e.preventDefault()
    dispatch(setAddChannelButtonStatus(true));
  };

  const handleCloseModal = (e) => {
    // e.preventDefault()
    dispatch(setAddChannelButtonStatus(false));
  };

  return (
    <form style={{}}>
      <Dialog open={addChannelButtonStatus} onClose={handleCloseModal}>
        <fieldset style={{ backgroundColor: '#120F13', color: 'white' }}>
          <DialogTitle sx={{ fontSize: '18px' }}>NEW CHANNEL</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin='dense'
              id='name'
              label='Channel Name'
              type='email'
              fullWidth
              // variant='standard'
              sx={{
                marginBlock: '1rem',
                backgroundColor: '#3C393F',
                '& .MuiInputLabel-root': {
                  color: '#fff',
                  '&.Mui-focused': {
                    color: '#fff',
                  },
                },
                '& .MuiInputBase-input': {
                  color: '#fff',
                  '&::placeholder': {
                    color: '#fff',
                    opacity: 0.7,
                  },
                },
              }}
            />

            <TextField
              id='outlined-textarea'
              label='Channel Description'
              // placeholder='Placeholder'
              multiline
              fullWidth
              sx={{
                marginBlock: '1rem',
                backgroundColor: '#3C393F',
                '& .MuiInputLabel-root': {
                  color: '#fff',
                  '&.Mui-focused': {
                    color: '#fff',
                  },
                },
                '& .MuiInputBase-input': {
                  color: '#fff',
                  '&::placeholder': {
                    color: '#fff',
                    opacity: 0.7,
                  },
                },
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={'handleClose'} variant='contained'>
              Save
            </Button>
          </DialogActions>
        </fieldset>
      </Dialog>
    </form>
  );
}

export default CreateChannelModal;
