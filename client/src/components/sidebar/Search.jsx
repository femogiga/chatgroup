import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
  return (
    <article>
      <form className='search-form flow-2'>
        <div className='search-input-cont'>
          <div>
            <SearchIcon />
          </div>

          <input type='search' name='search' placeholder='Search' />
        </div>
      </form>
    </article>
  );
};

export default Search;
