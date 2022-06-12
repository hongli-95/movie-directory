import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

export default function BackToTop(props) {
  return (
    <div>
      <button
        id='btn'
        type='button'
        className='btn btn-info'
        onClick={props.toTop}>
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    </div>
  );
}
