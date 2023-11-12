import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import {
  setAccountModalVisible,
  setAddChannelButtonStatus,
  setLoginLogoutStatus,
  setLoginModalStatus,
} from '../../features/sidebar/sidebarSlice';
import {
  clearInput,
  setAuthenticatedState,
  setInputValue,
} from '../../features/body/mainSlice';
import { useCreateChannelMutation } from '../../api/channelData';
import { useLoginMutation } from '../../api/userData';
import { useNavigate } from 'react-router-dom';

function LoginModal() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginModalStatus = useSelector(
    (state) => state.sidebar.loginModalStatus
  );
  const authenticatedState = useSelector(
    (state) => state.main.authenticatedState
  );
  const email = useSelector((state) => state.main.email);
  const password = useSelector((state) => state.main.password);
  const { isLoading, isSuccess, error, mutate } = useLoginMutation();

  const handleLogin = async () => {
    const data = { email: email, password: password };
    const response = mutate(data);
    dispatch(setAuthenticatedState(true));
    console.log(response);
    dispatch(setLoginModalStatus(false));
    dispatch(setAccountModalVisible(false));
    setTimeout(function () {
      location.reload();
    }, 1000);
  };

  const handleOpenModal = (e) => {
    // e.preventDefault()

    dispatch(setLoginModalStatus(true));
  };

  const handleCloseModal = (e) => {
    // e.preventDefault()
    dispatch(setLoginModalStatus(false));
  };
  console.log('email', email);
  console.log('password', password);
  return (
    <form style={{}}>
      <Dialog open={loginModalStatus} onClose={handleCloseModal}>
        <fieldset style={{ backgroundColor: '#120F13', color: 'white' }}>
          <DialogTitle sx={{ fontSize: '18px' }}>Login</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin='dense'
              id='name'
              label='Email'
              type='email'
              fullWidth
              name='email'
              value={email}
              onChange={(e) =>
                dispatch(
                  setInputValue({
                    fieldName: 'email',
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
              type='password'
              label='Password'
              // placeholder='Placeholder'
              multiline
              fullWidth
              name='password'
              value={password}
              onChange={(e) => {
                dispatch(
                  setInputValue({
                    fieldName: 'password',
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
            <Button type='cancel' variant='' onClick={handleCloseModal}>
              cancel
            </Button>
            <Button type='submit' variant='contained' onClick={handleLogin}>
              Login
            </Button>
          </DialogActions>
        </fieldset>
      </Dialog>
    </form>
  );
}

export default LoginModal;
