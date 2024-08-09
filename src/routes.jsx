//import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./Home";
import Company from "./components/Company/company";
import Contact from "./components/Contact/contact";
import Services from "./components/Services/services";
import Careers from "./components/Careers/careers";
import WhyAmx from "./components/Footer/whyAmx";
import Terms from "./components/Footer/terms";
import Impressum from "./components/impressum/impressum";
import TermsAndConditions from "./components/Footer/termAndCondition";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/company" component={Company} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />
        <Route path="/careers" component={Careers} />
        <Route path="/whyamx" component={WhyAmx} />
        <Route path="/terms" component={Terms} />
        <Route path="/impressum" component={Impressum} />
        <Route
          path="/termsandconditions/:address"
          component={TermsAndConditions}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
