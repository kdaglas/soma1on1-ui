import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TutorDashboardView from '../pages/Dashboard/tutordashview';
import HomeView from '../pages/Home/homeview';
import LoginView from '../pages/Auth/loginview';
import Notfoundpage from '../shared/Not';
import SelectSubjectView from '../pages/Auth/selectsubjectview';
import SignUpView from '../pages/Auth/signupview';
import ProfileView from '../pages/Profile/profileview';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={HomeView} />
      <Route path="/dashboard" exact component={TutorDashboardView} />
      <Route path="/login" exact component={LoginView} />
      <Route path="/signup" exact component={SignUpView} />
      <Route path="/select-subject" exact component={SelectSubjectView} />
      <Route path="/profile" exact component={ProfileView} />
      <Route path="/notfound" exact component={Notfoundpage} />
    </Switch>
  </Router>
);

export default Routes;
