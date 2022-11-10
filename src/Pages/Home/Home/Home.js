import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import AddedServices from '../../AddedServices/AddedServices';
import Banner from '../Banner/Banner';
import About from './About/About';
import Services from './Services/Services';
import Subscribe from './Subscribe/Subscribe';

const Home = () => {
  useTitle('Home')
    return (
        <div>
          <Banner></Banner>
          <Services></Services>
          <AddedServices></AddedServices>
          <About></About>
          <Subscribe></Subscribe>
        </div>
    );
};

export default Home;