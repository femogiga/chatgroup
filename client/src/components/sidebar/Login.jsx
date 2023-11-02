import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';

const Login = () => {
  return (
    <article className='login flex  space-between '>
      <div className='flex gap-05 align-items--center flow-1'>
        <div className='photo-container flex align-items--center'>
          <img src='https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=1600' />
        </div>
        <p className='bold-500'>Xanthe Neal</p>
      </div>
      <p style={{ alignSelf: 'center' }}>
        <KeyboardArrowDownSharpIcon />
      </p>
    </article>
  );
};

export default Login;
