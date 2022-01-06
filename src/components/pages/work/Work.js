import React from 'react';
import Video from '../../../images/VideoSearchApp.jpg';
import Movies from '../../../images/MovieApp.jpg';
import Documentation from '../../../images/DocumentationPage.jpg';
import surveyform from '../../../images/SurveyForm.jpg';
import todo from '../../../images/todolist.jpg';
import product from '../../../images/ProductLandingPage.jpg';
export default function Work() {
  return ( 
      <div>
         <div className="card" style={{backgroundColor:"#0B085E"}}>
           <div className="card-content white-text">
           <h5>
            <strong>My Works</strong>
          </h5>
          <div className="row mt-top head-tex">
          <div className='col s6 head-image'>
            <img className='activator col s12' src={Video} alt='Video' />
            </div>
            <div class="text-on-image col s12">
            <h6>Video Search App</h6>
            <p>This is a video searching App made using React and YouTube API. 
                  We can search for any videos we want and play it.</p></div>
            </div>
            <hr height="2px"/>
 
           <div className="row mt-top head-tex">
          <div className='col s6 head-image'>
            <img className='activator col s12' src={Movies} alt='Video' />
            </div>
            <div class="text-on-image col s12">
            <h6>Movies Application(OTT)</h6>
            <p>This is a movie website using React Hooks, Bootstrap, OMDB API.
                   We can search for a movie and we can add that to our favourites</p></div>
            </div>
            <hr height="2px"/>

            <div className="row mt-top head-tex">
          <div className='col s6 head-image'>
            <img className='activator col s12' src={Documentation} alt='Video' />
            </div>
            <div class="text-on-image col s12">
            <h6> Documentaion Page</h6>
            <p>A Javascript documentation web page using HTML & CSS. Easy to understand and learn.</p></div>
            </div>
            <hr height="2px"/>

            <div className="row mt-top head-tex">
          <div className='col s6 head-image'>
            <img className='activator col s12' src={surveyform} alt='Video' />
            </div>
            <div class="text-on-image col s12">
            <h6> A Survey Form</h6>
            <p>A survey form using HTML and CSS.</p></div>
            </div>
            <hr height="2px"/>

            <div className="row mt-top head-tex">
          <div className='col s6 head-image'>
            <img className='activator col s12' src={todo} alt='Video' />
            </div>
            <div class="text-on-image col s12">
            <h6> To Do List</h6>
            <p>This is a To Do list app using React. This app can be used to take notes and 
                  we can delete that note when we have done that task.</p></div>
            </div>
            <hr height="2px"/>

            <div className="row mt-top head-tex">
          <div className='col s6 head-image'>
            <img className='activator col s12' src={product} alt='Video' />
            </div>
            <div class="text-on-image col s12">
            <h6> Product Landing Page</h6>
            <p>This is a bussiness website made using HTML, CSS and Bootstrap.</p></div>
            </div>
            <hr height="2px"/>
</div>
</div>
</div>
     
    );
}