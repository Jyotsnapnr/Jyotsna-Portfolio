import React from 'react';
import developer from '../../../images/developer.jpg';

export default function About() {
  return (
    <div>
      <div className='card center' style={{backgroundColor:"#0B085E"}}>
        <div className="card-content center">
          <h2 className="mt-bottom white-text">
            Hi there <span role="img" aria-label="wave">🖐</span></h2>
          <h6 className="white-text">
           I am Jyotsna Koova, Welcome to my Website.
          </h6>
          <div className='card-image center'>
          <img class="center" src={developer} alt='Jyots' style={{width: "600px", height: "400px", }} />
          </div>
          </div>
          </div>
        </div>
  );
}
