import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Clients from '../components/Clients';
import Location from '../components/Location';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Clients />
      <Location />
      <Footer />
    </>
  );
};

export default Home;
