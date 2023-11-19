import SearchIcon from '@mui/icons-material/Search';
import { useChannelData } from './../../api/channelData';
import { useDispatch } from 'react-redux';
import { setRoomId } from '../../features/sidebar/sidebarSlice';

const Search = () => {
  const { isPending, error, data } = useChannelData();
  console.log('channels', data);
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    const value = e.target.value;
    if (!value) {
      return;
    }
    const selectedOption = data.find((item) => item.name === value);
    console.log('selected option====>', selectedOption.id);
    dispatch(setRoomId(selectedOption.id));
  };
  return (
    <article>
      <form className='search-form flow-2'>
        <div className='search-input-cont'>
          <div>
            <SearchIcon />
          </div>

          <input
            list='channels'
            type='search'
            name='search'
            placeholder='Search'
            style={{ color: 'white', paddingLeft: '3rem' }}
            onChange={handleSearchChange}
          />
          <datalist id='channels'>
            {data.map((channel) => (
              <option value={channel.name} key={channel.id}></option>
            ))}
          </datalist>
        </div>
      </form>
    </article>
  );
};

export default Search;
