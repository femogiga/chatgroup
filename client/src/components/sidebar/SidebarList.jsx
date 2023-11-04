import '../sidebar/sidebar.css';
import Login from './Login';
import Search from './Search';
import ChannelCard from './ChannelCard';
import AddChannel from './AddChannel';
import { useAllChannel } from '../../api/channelData';

const SidebarList = () => {
  const { isPending, error, data } = useAllChannel();
  console.log('data ====>', data);
  return (
    <aside className='sidebar' style={{ paddingInline: '1rem' }}>
      <AddChannel />

      <div className='sidebar-body'>
        <Search />
        <article className=''>
          <div className='member-cont'>
            {
              isPending
                ? 'Loading...'
                : data.map((channel) => (
                    <ChannelCard
                      key={channel?.id}
                      title={channel?.name.toUpperCase()}
                    />
                  ))

              // <ChannelCard title={'RANDOM'} />
              // <ChannelCard title={'BACK END'} />
              // <ChannelCard title={'CATS AND DOGS'} />
              // <ChannelCard title={'WELCOME'} />}
            }
          </div>
        </article>
      </div>
      <footer>
        <Login />
      </footer>
    </aside>
  );
};

export default SidebarList;
