import React, {useState, useEffect} from 'react';
import Banner from '../../components/Home/banner/banner';
import Header from '../../shared/header/Header';
// import Description from '../../components/Home/description/description';
import Footer from '../../shared/footer/Footer';
import Card from '../../components/Home/card/card';
import Tabs from '../../components/Home/tabs/tabs';
import Join from '../../components/Home/join/join';
import Pictorial from '../../components/Home/pictorial/pictorial';
import Loader from '../../components/Home/loader/loader';
// import Testimony from '../../components/Home/testimonials/testimonials';
// import Contacts from '../../shared/contact/contact';

function HomeView() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 10000)
  }, [])

  return (
  <>
    {loading ? (<Loader />) : (
      <>
        <Header />
        <Banner />
        <Card />
        <Tabs />
        <Join />
        <Pictorial />
        {/* <Testimony /> */}
        {/* <Contacts /> */}
        <Footer />
      </>
    )}
  </>
  )
};

export default HomeView;
