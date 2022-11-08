import React from 'react';
import Banner from '../Banner/Banner';
import About from './About/About';
import Services from './Services/Services';
import Subscribe from './Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Services></Services>
          <About></About>
          <Subscribe></Subscribe>
        </div>
    );
};

export default Home;