import { Avatar, Button, Stack } from '@mui/material';
import { useDispatch } from 'react-redux';
import {
  setAccountModalVisible,
  setLoginModalStatus,
  setProfileModalStatus,
  setRegisterModalStatus,
} from '../../features/sidebar/sidebarSlice';
import { useUserGroup } from '../../api/userData';
import { isPending } from '@reduxjs/toolkit';
import { setInputValue } from '../../features/body/mainSlice';
function ProfileModal() {
  // (firstname = 'Bola'), (lastname = 'Tinubu');
  const dispatch = useDispatch();
  const handleCloseModal = async (e) => {
    dispatch(setProfileModalStatus(false));
    dispatch(setAccountModalVisible(false));
  };
  const userIdFromStorage = localStorage.getItem('userData');
  const parsedData = JSON.parse(userIdFromStorage);
  // console.log('parsedDataid======>',parsedData.id)
  // const { isPending, error, data } = useUserGroup(parsedData?.id);
  //console.log('groups===>',data)
  const { id, firstname, lastname, imgUrl, email } = parsedData;
  const { isPending, error, data } = useUserGroup(id);

  const handleEditButton = () => {
    dispatch(
      setInputValue({ fieldName: 'firstname', value: parsedData?.firstname })
    );
    dispatch(
      setInputValue({ fieldName: 'lastname', value: parsedData?.lastname })
    );
    dispatch(setInputValue({ fieldName: 'email', value: parsedData?.email }));
    dispatch(setInputValue({ fieldName: 'imgUrl', value: parsedData?.imgUrl }));
    dispatch(setRegisterModalStatus(true));
    dispatch(setProfileModalStatus(false));
  };
  return (
    <div
      className='profile-modal'
      style={{
        color: 'white',
        // border: '1px solid white',
      }}>
      <h1 className='flow-2' style={{ alignSelf: 'center' }}>
        Profile
      </h1>
      <Avatar
        src={imgUrl}
        sx={{
          width: '150px',
          height: '150px',
          marginBlockEnd: '2rem',
          alignSelf: 'center',
        }}
      />
      <article
        className='flex flow-1 gap-1 align-items--center'
        style={{ fontSize: '1.4rem', paddingInline: '2rem' }}>
        <p>First name:</p>
        <p>{firstname || 'Bola '}</p>
      </article>
      <article
        className='flex flow-1 gap-1 align-items--center'
        style={{ fontSize: '1.4rem', paddingInline: '2rem' }}>
        <p>Last name:</p>
        <p>{lastname || 'Tinubu '}</p>
      </article>

      <article
        className='flex flow-1 gap-1 align-items--center'
        style={{ fontSize: '1.4rem', paddingInline: '2rem' }}>
        <p>Email:</p>
        <p>{email || 'tinubu@gmail.com'}</p>
      </article>
      <article
        className='flex flow-1 gap-1 align-items--center'
        style={{ fontSize: '1.4rem', paddingInline: '2rem' }}>
        <p>Full name:</p>
        <p>{firstname + ' ' + lastname}</p>
      </article>

      <article
        className='flex flow-2 gap-1 align-items--center'
        style={{ fontSize: '1.2rem', paddingInline: '2rem' }}>
        <div>
          <p style={{ textDecoration: 'underline', fontSize: '1.4rem' }}>
            Groups
          </p>
          {isPending
            ? 'Loading'
            : data?.combinedData.map((group, index) => (
                <p key={`grp-${index}`}>{group.name}</p>
              ))}
          {/* <p>Front end development</p>
          <p>Backend Development</p>
          <p>Welcome</p>
          <p>Cats and dog</p> */}
        </div>
      </article>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
        <Button
          onClick={handleEditButton}
          style={{
            backgroundColor: 'green',
            width: '3rem',
            color: 'white',
            // margin: '0 auto',
            marginLeft: '2rem',
          }}>
          Edit
        </Button>
        <Button
          onClick={handleCloseModal}
          style={{
            backgroundColor: 'green',
            width: '3rem',
            color: 'white',
            // margin: '0 auto',
          }}>
          Leave
        </Button>
      </div>
    </div>
  );
}

export default ProfileModal;
