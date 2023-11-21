import { Avatar, Button, Stack, TextField } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setInputValue } from '../../features/body/mainSlice';
import {
  setAccountModalVisible,
  setRegisterModalStatus,
} from '../../features/sidebar/sidebarSlice';
import { useUpdateUerMutation } from '../../api/userData';

const RegisterModal = () => {
  const userData = localStorage.getItem('userData');
  const firstname = useSelector((state) => state.main.firstname);
  const lastname = useSelector((state) => state.main.lastname);
  const email = useSelector((state) => state.main.email);
  const password = useSelector((state) => state.main.password);
  const imgUrl = useSelector((state) => state.main.imgUrl);

  const parsedData = JSON.parse(userData);

  // console.log('second====>', parsedData);

  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    dispatch(
      setInputValue({ fieldName: e.target.name, value: e.target.value })
    );
  };

  const { isLoading, isSuccess, error, mutate } = useUpdateUerMutation();

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (password == '') {
      return;
    }
    const data = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
      imgUrl: imgUrl,
    };

    try {
      const parsedData = JSON.parse(userData);
      if (!parsedData) {
        return;
      }

      console.log('dattaaForupdate', data);
      await mutate({ id: parsedData?.id, data });
      setTimeout(() => {
        dispatch(setRegisterModalStatus(false));
        dispatch(setAccountModalVisible(false));
      }, 1000);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div
      className='register-modal profile-modal'
      style={{
        color: 'white',
      }}>
      <h1 className='flow-2' style={{ alignSelf: 'center' }}>
        Update profile
      </h1>
      <Avatar
        src={parsedData?.imgUrl || imgUrl}
        sx={{
          width: '120px',
          height: '120px',
          marginBlockEnd: '2rem',
          marginInlineStart: '2rem',
          alignSelf: 'flex-start',
        }}
      />
      <form style={{ color: 'white' }}>
        <Stack
          justifyContent='center'
          sx={{
            color: 'white',
            borderColor: 'white',
            marginInlineStart: '2rem',
          }}>
          <TextField
            label='First name'
            variant='outlined'
            value={firstname || parsedData?.firstname}
            name='firstname'
            sx={{
              color: 'white',
              borderColor: 'white',
              backgroundColor: 'white',
              width: '50%',
              minWidth: '18rem',
              marginBlockEnd: '1rem',
            }}
            onChange={handleInputChange}
          />
          <TextField
            label='Last name'
            variant='outlined'
            value={lastname || parsedData?.lastname}
            name='lastname'
            sx={{
              color: 'white',
              borderColor: 'white',
              backgroundColor: 'white',
              width: '50%',
              minWidth: '18rem',
              marginBlockEnd: '1rem',
            }}
            onChange={handleInputChange}
          />
          <TextField
            label='Email'
            variant='outlined'
            value={email || parsedData?.email}
            name='email'
            sx={{
              color: 'white',
              borderColor: 'white',
              backgroundColor: 'white',
              width: '50%',
              minWidth: '18rem',
              marginBlockEnd: '1rem',
            }}
            onChange={handleInputChange}
          />
          <TextField
            type='password'
            label='Password'
            variant='outlined'
            value={password}
            name='password'
            sx={{
              color: 'white',
              borderColor: 'white',
              backgroundColor: 'white',
              width: '50%',
              minWidth: '18rem',
              marginBlockEnd: '1rem',
            }}
            onChange={handleInputChange}
          />

          <TextField
            label='Image url'
            variant='outlined'
            value={imgUrl || parsedData?.imgUrl}
            name='imgUrl'
            sx={{
              color: 'white',
              borderColor: 'white',
              backgroundColor: 'white',
              width: '50%',
              minWidth: '18rem',
              marginBlockEnd: '1rem',
            }}
            onChange={handleInputChange}
          />
        </Stack>
        <Button
          onClick={(e) => handleUpdate(e)}
          style={{
            backgroundColor: '#13274F',
            width: '3rem',
            color: 'white',
            marginInlineStart: '2rem',
          }}>
          Update
        </Button>
        <Button
          onClick={() => dispatch(setRegisterModalStatus(false))}
          style={{
            backgroundColor: '#7C3030',
            width: '3rem',
            color: 'white',
            marginInlineStart: '2rem',
          }}>
          Cancel
        </Button>
      </form>
    </div>
  );
};

export default RegisterModal;
