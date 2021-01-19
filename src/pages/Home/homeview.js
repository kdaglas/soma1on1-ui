import React from 'react';
import Banner from '../../components/Home/banner/banner';
import Header from '../../shared/header/Header';
// import Description from '../../components/Home/description/description';
import Footer from '../../shared/footer/Footer';
import Cards from '../../components/Home/cards/cards';
import Tabs from '../../components/Home/tabs/tabs';
// import Testimony from '../../components/Home/testimonials/testimonials';
// import Contacts from '../../shared/contact/contact';

const HomeView = () => (
  <div>
    <Header />
    <Banner />
    {/* <Description /> */}
    <Cards />
    <Tabs />
    {/* <Testimony /> */}
    {/* <Contacts /> */}
    <Footer />
    {/* <Footer />
    <Footer />
    <Footer />
    <Footer />
    <Footer /> */}
  </div>
);

export default HomeView;
