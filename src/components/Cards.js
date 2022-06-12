import React from 'react';

export default function Cards(props) {
  return (
    <div className='card-content col-lg-3 col-md-4'>
      <a title='Click to go to IMDb page of this movie' href={props.id}>
        <img src={props.poster} alt='card-poster' className='card-img'></img>
      </a>
      <h5 className='card-title'>{props.title}</h5>
      <h5 className='card-year'>{props.year}</h5>
      <h5 className='card-type'>{props.type}</h5>
    </div>
  );
}
