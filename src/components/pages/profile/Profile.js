import React from 'react';
import ImgProfile from '../../../images/person1.jpg';

export default function Profile() {
	return (
		<div>
			<div className='card'>
				<div className='card-image'>
					<img className='activator' src={ImgProfile} alt='Jyots' />
				</div>
				<div className='card-content'>
					<span className='card-title activator grey-text text-darken-4'>
					Web Application Developer
					</span>
					<p>Frontend/ React & NodeJs/ FullStack</p>
				</div>
				
			</div>
		</div>
	);
}
