import { Avatar, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import {
  setAccountModalVisible,
  setProfileModalStatus,
} from '../../features/sidebar/sidebarSlice';
function ProfileModal({ firstname, lastname, email, imageUrl }) {
  (firstname = 'Bola'), (lastname = 'Tinubu');
  const dispatch = useDispatch();
  const handleCloseModal = (e) => {
    dispatch(setProfileModalStatus(false));
    dispatch(setAccountModalVisible(false));
  };


  return (
    <div
      className='profile-modal'
      style={{
        color: 'white',
        // border: '1px solid white',
        width: '40%',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        paddingBlock: '2rem',
        minWidth: '360px',
        position: 'absolute',
        zIndex: '3',
        left: '30%',
        top: '4rem',
        backgroundColor: '#120F13',
        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.43)',
      }}>
      <h1 className='flow-2' style={{ alignSelf: 'center' }}>
        Profile
      </h1>
      <Avatar
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
        <p>{firstname || 'tinubu@gmail.com'}</p>
      </article>
      <article
        className='flex flow-1 gap-1 align-items--center'
        style={{ fontSize: '1.4rem', paddingInline: '2rem' }}>
        <p>Full name:</p>
        <p>{firstname + ' ' + lastname}</p>
      </article>

      <article
        className='flex flow-2 gap-1 align-items--center'
        style={{ fontSize: '1.5rem', paddingInline: '2rem' }}>
        <div>
          <p style={{ textDecoration: 'underline' }}>Groups</p>
          <p>Front end development</p>
          <p>Backend Development</p>
          <p>Welcome</p>
          <p>Cats and dog</p>
        </div>
      </article>
      <Button
        onClick={handleCloseModal}
        style={{
          backgroundColor: 'green',
          width: '3rem',
          color: 'white',
          margin: '0 auto',
        }}>
        Leave
      </Button>
    </div>
  );
}

export default ProfileModal;
