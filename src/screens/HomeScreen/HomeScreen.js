import React from 'react';
import './HomeScreen.css';
import CarouselComponent from '../../components/Carousel/Carousel';

const HomeScreen = () => {
  return (
    <div className="home-screen">
      <div className="home-screen-banner">
        <h1>Welcome to The Bloom Room</h1>
        <p>Browse our collection of beautiful flowers and find the perfect bouquet for any occasion!</p>
      </div>
      <CarouselComponent/>
    </div>
  );
};

export default HomeScreen;


