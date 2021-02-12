import React from 'react';

import SideNav from '../../shared/sidenav/sidenav';
import TopNav from '../../shared/topNav/topNav';
import Footer from '../../shared/dashfooter/footer';

import crown from '../../assets/img/crown.svg';
// import dash from '../../assets/img/dash.svg';
import handshake from '../../assets/img/hand-shake.svg';
import mic from '../../assets/img/mic.svg';

import avatar from '../../assets/img/avatars/avatar.jpg';
import avatar2 from '../../assets/img/avatars/avatar-2.jpg';
import avatar3 from '../../assets/img/avatars/avatar-3.jpg';
import avatar4 from '../../assets/img/avatars/avatar-4.jpg';
import avatar5 from '../../assets/img/avatars/avatar-5.jpg';


import jed1 from '../../assets/img/avatars/jed1.svg';
import jed2 from '../../assets/img/avatars/jed2.svg';
import jed3 from '../../assets/img/avatars/jed3.svg';
import jed4 from '../../assets/img/avatars/jed4.svg';
import jed5 from '../../assets/img/avatars/jed5.svg';

import jed6 from '../../assets/img/photos/jed6.svg';
import jed7 from '../../assets/img/photos/jed7.svg';
import jed8 from '../../assets/img/photos/jed8.svg';

import lesson1 from '../../assets/img/photos/lesson1.svg';
import lesson2 from '../../assets/img/photos/lesson2.svg';
import lesson3 from '../../assets/img/photos/lesson3.svg';

import piechart from '../../assets/img/pie-chart.svg';
import calendar from '../../assets/img/calendar.svg';

import '../../assets/css/app.css';



const TutorProfile = () => (

    <div className="wrapper">

        <SideNav />

        <div className="main">

            <TopNav />

            <main className="content">
                <div className="container-fluid p-0">

                    <h1 className="h3 mb-3">Profile</h1>

                    <div className="row">
                        <div className="col-md-4 col-xl-3">
                            <div className="card mb-3">
                                <div className="card-header">
                                    <h5 className="card-title mb-0">Profile Details</h5>
                                </div>
                                <div className="card-body text-center">
                                    <img src={avatar4} alt="Christina Mason"
                                        className="img-fluid rounded-circle mb-2" width="128" height="128" />
                                    <h5 className="card-title mb-0">Christina Mason</h5>
                                    <div className="text-muted mb-2">Lead Developer</div>

                                    <div>
                                        <a className="btn btn-primary btn-sm" href="#">Follow</a>
                                        <a className="btn btn-primary btn-sm" href="#"><span
                                            data-feather="message-square"></span> Message</a>
                                    </div>
                                </div>
                                <hr className="my-0" />
                                <div className="card-body">
                                    <h5 className="h6 card-title">Skills</h5>
                                    <a href="#" className="badge bg-primary mr-1 my-1">HTML</a>
                                    <a href="#" className="badge bg-primary mr-1 my-1">JavaScript</a>
                                    <a href="#" className="badge bg-primary mr-1 my-1">Sass</a>
                                    <a href="#" className="badge bg-primary mr-1 my-1">Angular</a>
                                    <a href="#" className="badge bg-primary mr-1 my-1">Vue</a>
                                    <a href="#" className="badge bg-primary mr-1 my-1">React</a>
                                    <a href="#" className="badge bg-primary mr-1 my-1">Redux</a>
                                    <a href="#" className="badge bg-primary mr-1 my-1">UI</a>
                                    <a href="#" className="badge bg-primary mr-1 my-1">UX</a>
                                </div>
                                <hr className="my-0" />
                                <div className="card-body">
                                    <h5 className="h6 card-title">About</h5>
                                    <ul className="list-unstyled mb-0">
                                        <li className="mb-1"><span data-feather="home" className="feather-sm mr-1"></span> Lives
                        in <a href="#">San Francisco, SA</a></li>

                                        <li className="mb-1"><span data-feather="briefcase" className="feather-sm mr-1"></span>
                        Works at <a href="#">GitHub</a></li>
                                        <li className="mb-1"><span data-feather="map-pin" className="feather-sm mr-1"></span>
                        From <a href="#">Boston</a></li>
                                    </ul>
                                </div>
                                <hr className="my-0" />
                                <div className="card-body">
                                    <h5 className="h6 card-title">Elsewhere</h5>
                                    <ul className="list-unstyled mb-0">
                                        <li className="mb-1"><span className="fas fa-globe fa-fw mr-1"></span> <a
                                            href="#">staciehall.co</a></li>
                                        <li className="mb-1"><span className="fab fa-twitter fa-fw mr-1"></span> <a
                                            href="#">Twitter</a></li>
                                        <li className="mb-1"><span className="fab fa-facebook fa-fw mr-1"></span> <a
                                            href="#">Facebook</a></li>
                                        <li className="mb-1"><span className="fab fa-instagram fa-fw mr-1"></span> <a
                                            href="#">Instagram</a></li>
                                        <li className="mb-1"><span className="fab fa-linkedin fa-fw mr-1"></span> <a
                                            href="#">LinkedIn</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-8 col-xl-9">
                            <div className="card">
                                <div className="card-header">

                                    <h5 className="card-title mb-0">Activities</h5>
                                </div>
                                <div className="card-body h-100">

                                    <div className="d-flex align-items-start">
                                        <img src={avatar5} width="36" height="36"
                                            className="rounded-circle mr-2" alt="Vanessa Tucker" />
                                        <div className="flex-grow-1">
                                            <small className="float-right text-navy">5m ago</small>
                                            <strong>Vanessa Tucker</strong> started following <strong>Christina
                            Mason</strong><br />
                                            <small className="text-muted">Today 7:51 pm</small><br />

                                        </div>
                                    </div>

                                    <hr />
                                    <div className="d-flex align-items-start">
                                        <img src={avatar} width="36" height="36"
                                            className="rounded-circle mr-2" alt="Charles Hall" />
                                        <div className="flex-grow-1">
                                            <small className="float-right text-navy">30m ago</small>
                                            <strong>Charles Hall</strong> posted something on <strong>Christina
                            Mason</strong>'s timeline<br />
                                            <small className="text-muted">Today 7:21 pm</small>

                                            <div className="border text-sm text-muted p-2 mt-1">
                                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem
                                                quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam
                                                nunc, blandit vel, luctus
                                                pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt
                                                tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis
                                                ante.
                        </div>

                                            <a href="#" className="btn btn-sm btn-danger mt-1"><i className="feather-sm"
                                                data-feather="heart"></i> Like</a>
                                        </div>
                                    </div>

                                    <hr />
                                    <div className="d-flex align-items-start">
                                        <img src={avatar4} width="36" height="36"
                                            className="rounded-circle mr-2" alt="Christina Mason" />
                                        <div className="flex-grow-1">
                                            <small className="float-right text-navy">1h ago</small>
                                            <strong>Christina Mason</strong> posted a new blog<br />

                                            <small className="text-muted">Today 6:35 pm</small>
                                        </div>
                                    </div>

                                    <hr />
                                    <div className="d-flex align-items-start">
                                        <img src={avatar2} width="36" height="36"
                                            className="rounded-circle mr-2" alt="William Harris" />
                                        <div className="flex-grow-1">
                                            <small className="float-right text-navy">3h ago</small>
                                            <strong>William Harris</strong> posted two photos on <strong>Christina
                            Mason</strong>'s timeline<br />
                                            <small className="text-muted">Today 5:12 pm</small>

                                            <div className="row g-0 mt-1">
                                                <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                                                    <img src="img/photos/unsplash-1.jpg" className="img-fluid pr-2"
                                                        alt="Unsplash" />
                                                </div>
                                                <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                                                    <img src="img/photos/unsplash-2.jpg" className="img-fluid pr-2"
                                                        alt="Unsplash" />
                                                </div>
                                            </div>

                                            <a href="#" className="btn btn-sm btn-danger mt-1"><i className="feather-sm"
                                                data-feather="heart"></i> Like</a>
                                        </div>
                                    </div>

                                    <hr />
                                    <div className="d-flex align-items-start">
                                        <img src={avatar2} width="36" height="36"
                                            className="rounded-circle mr-2" alt="William Harris" />
                                        <div className="flex-grow-1">
                                            <small className="float-right text-navy">1d ago</small>
                                            <strong>William Harris</strong> started following <strong>Christina
                            Mason</strong><br />
                                            <small className="text-muted">Yesterday 3:12 pm</small>

                                            <div className="d-flex align-items-start mt-1">
                                                <a className="pr-3" href="#">
                                                    <img src={avatar4} width="36" height="36"
                                                        className="rounded-circle mr-2" alt="Christina Mason" />
                                                </a>
                                                <div className="flex-grow-1">
                                                    <div className="border text-sm text-muted p-2 mt-1">
                                                        Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id,
                                                        lorem. Maecenas nec odio et ante tincidunt tempus.
                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <hr />
                                    <div className="d-flex align-items-start">
                                        <img src={avatar4} width="36" height="36"
                                            className="rounded-circle mr-2" alt="Christina Mason" />
                                        <div className="flex-grow-1">
                                            <small className="float-right text-navy">1d ago</small>
                                            <strong>Christina Mason</strong> posted a new blog<br />
                                            <small className="text-muted">Yesterday 2:43 pm</small>
                                        </div>
                                    </div>

                                    <hr />
                                    <div className="d-flex align-items-start">
                                        <img src={avatar} width="36" height="36"
                                            className="rounded-circle mr-2" alt="Charles Hall" />
                                        <div className="flex-grow-1">
                                            <small className="float-right text-navy">1d ago</small>
                                            <strong>Charles Hall</strong> started following <strong>Christina
                            Mason</strong><br />
                                            <small className="text-muted">Yesterdag 1:51 pm</small>
                                        </div>
                                    </div>

                                    <hr />
                                    <a href="#" className="btn btn-primary btn-block">Load more</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>

            <Footer />

        </div>
    </div>
);

export default TutorProfile;
