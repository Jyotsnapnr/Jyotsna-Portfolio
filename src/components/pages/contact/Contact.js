import React from 'react';
import { Button} from 'react-bootstrap';

export default function Contact() {
    return (
        <div className="card">
        <div className="card-content">
			<span className='card-title grey-text text-darken-4'>
						I am a click away..!
			</span>
            <div className='flex-container row'>
					<Button  onClick={() => window.location = 'mailto:jyotsnapnr@gmail.com'}>Email Me</Button>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jyotsna-koova-1376937a"> <Button>LinkedIn</Button> </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/Jyotsnapnr"> <Button>GitHub</Button></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/jyotsnapnr"><Button>Instagram</Button></a>
					</div>
                    
				</div>
        </div>
);
    }