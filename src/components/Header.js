import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Header(props) {
  const searchIcon = <FontAwesomeIcon icon={faSearch} />;

  return (
    <div id='header-content'>
      <div className='header-title'>
        <h1 className='title-text'>IMDb Directory</h1>
        <input
          type='text'
          id='search-bar'
          placeholder='Movies to search...'
          onChange={props.handleChange}></input>
        <button className='search-button' onClick={props.handleClick}>
          {searchIcon} Search
        </button>
      </div>
    </div>
  );
}
