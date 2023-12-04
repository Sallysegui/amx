//import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './Home';
import Company from './components/Company/company';
import Contact from './components/Contact/contact';
import Services from './components/Services/services';

const Routes = () => {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/company" component={Company} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    );
  };
  

export default Routes;