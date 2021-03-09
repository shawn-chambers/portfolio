import React, { useState } from 'react';
import searchIcon from '../../assets/images/Vector_search_icon.svg.png';

const SearchBar = () => {

  const [search, setSearch] = useState(true);
  const options = search ? 'Search Shawnipedia' : 'nope';

  return (
      <div className='search'>
        <input readOnly value={options} onClick={() => setSearch(!search)}></input>
        <img alt='' src={searchIcon}></img>
      </div>
  )
};

export default SearchBar;