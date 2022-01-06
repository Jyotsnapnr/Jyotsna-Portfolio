import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import Skills from './components/pages/skills/Skills';
import Experiences from './components/pages/experiences/Experiences';
import Educations from './components/pages/educations/Educations';
import Details from './components/pages/details/Details';
import Webdev from './components/pages/webdev/Webdev';
import Project from './components/pages/project/Project';
import Responsive from './components/pages/responsive/Responsive';
import Algorithm from './components/pages/algorithm/Algorithm';
import Work from './components/pages/work/Work';
import './App.css';
import Contact from './components/pages/contact/Contact';

function App() {
  return (
    <Router>
      <>
        <Route exact path="/" component={Home} />
        <Switch>
          <Route path="/skills" component={Skills} />
          <Route path="/experiences" component={Experiences} />
          <Route path="/educations" component={Educations} />
          <Route path="/webdev" component={Webdev} />
          <Route path="/details" component={Details} />
          <Route path="/project" component={Project} />
          <Route path="/responsive" component={Responsive} />
          <Route path="/algorithm" component={Algorithm} />
          <Route path="/works" component={Work} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
