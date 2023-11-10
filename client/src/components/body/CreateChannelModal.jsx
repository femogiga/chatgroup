import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { setAddChannelButtonStatus } from '../../features/sidebar/sidebarSlice';
import { clearInput, setInputValue } from '../../features/body/mainSlice';
import { useCreateChannelMutation } from '../../api/channelData';

function CreateChannelModal() {
  const dispatch = useDispatch();
  const addChannelButtonStatus = useSelector(
    (state) => state.sidebar.addChannelButtonStatus
  );

  const channelName = useSelector((state) => state.main.channelName);
  const channelDescription = useSelector(
    (state) => state.main.channelDescription
  );

  const { isLoading, isSuccess, error, mutate } = useCreateChannelMutation();

  const handleOpenModal = (e) => {
    // e.preventDefault()
    dispatch(setAddChannelButtonStatus(true));
  };

  const handleCloseModal = (e) => {
    // e.preventDefault()
    dispatch(setAddChannelButtonStatus(false));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!channelName || channelDescription) {
        return;
      }
      const data = { name: channelName, description: channelDescription };
      mutate(data);
      dispatch(clearInput({ fieldName: 'channelName' }));
      dispatch(clearInput({ fieldName: 'channelDescription' }));
      dispatch(setAddChannelButtonStatus(false));
    } catch (err) {
      console.error(err);
    }
  };
  console.log('channel name=====>', channelName);
  console.log('channel description=====>', channelDescription);

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
              name='channelName'
              value={channelName}
              onChange={(e) =>
                dispatch(
                  setInputValue({
                    fieldName: 'channelName',
                    value: e.target.value,
                  })
                )
              }
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
              name='channelDescription'
              value={channelDescription}
              onChange={(e) => {
                dispatch(
                  setInputValue({
                    fieldName: 'channelDescription',
                    value: e.target.value,
                  })
                );
              }}
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
            <Button type='submit' variant='contained' onClick={handleSubmit}>
              Save
            </Button>
          </DialogActions>
        </fieldset>
      </Dialog>
    </form>
  );
}

export default CreateChannelModal;
