import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

const Sidebar = () => {
  return (
    <aside className='sidebar'>
      <div className='channel-nav flex gap-05 align-items--center'>
        <NavigateBeforeIcon style={{ fontSize: '2rem' }} />
        <h3>All channels</h3>
      </div>
      <article>
        <p>FRONT-END DEVELOPERS</p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
          laboriosam placeat suscipit tempore dolorem quidem iste perferendis
          commodi, rem nobis vero reiciendis ad illum.
        </p>
      </article>
      <article className=''>
        <p>MEMBERS</p>
        <div className='member-cont'>
          <div className='flex gap-05 align-items--center flow-1'>
            <div className='photo-container flex align-items--center'>
              <img src='https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=1600' />
            </div>
            <p>Xanthe Neal</p>
          </div>

          <div className='flex gap-05 align-items--center flow-1'>
            <div className='photo-container flex align-items--center'>
              <img src='https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=1600' />
            </div>
            <p>Xanthe Neal</p>
          </div>

          <div className='flex gap-05 align-items--center flow-1'>
            <div className='photo-container flex align-items--center'>
              <img src='https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=1600' />
            </div>
            <p>Xanthe Neal</p>
          </div>

          <div className='flex gap-05 align-items--center flow-1'>
            <div className='photo-container flex align-items--center'>
              <img src='https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=1600' />
            </div>
            <p>Xanthe Neal</p>
          </div>
        </div>
      </article>
    </aside>
  );
};

export default Sidebar;
