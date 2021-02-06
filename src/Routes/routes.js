import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TutorDashboard from '../components/Dashboard/tutordashboard';
import TutorDashboardView from '../pages/Dashboard/tutordashview';
// import AboutView from '../containers/About/aboutview';
// import GalleryView from '../containers/Gallery/galleryview';

// import DetailsView from '../containers/Details/detailsview';
// import DetailsView1 from '../containers/Details/detailsview1';
// import DetailsView2 from '../containers/Details/detailsview2';

// import FacilitiesView from '../containers/Facilities/facilitiesview';

// import ActivitiesView from '../containers/Activities/activitiesview';
// import AccommodationView from '../containers/Accommodation/accommodationview';
import HomeView from '../pages/Home/homeview';
import LoginView from '../pages/Auth/loginview';
// import Notfoundpage from '../shared/Not';
// import Footer from '../shared/footer/Footer';

const Routes = () => (
    <Router>
        <Switch>
            <Route path="/" exact component={ HomeView } />
            <Route path="/dashboard" exact component={ TutorDashboardView } />
            <Route path="/login" exact component={ LoginView } />
            {/* <Route path="/about" exact component={ AboutView } />
            <Route path="/accommodate" exact component={ AccommodationView } />
            <Route path="/gallery" exact component={ GalleryView } />
            <Route path="/details" exact component={ DetailsView } />
            <Route path="/details1" exact component={ DetailsView1 } />
            <Route path="/details2" exact component={ DetailsView2 } />
            <Route path="/activities" exact component={ ActivitiesView } />
            <Route path="/facilities" exact component={ FacilitiesView } />
            <Route path="/notfound" exact component={ Notfoundpage } /> */}
        </Switch>
    </Router>
)

export default Routes;
