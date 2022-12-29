import React from 'react';
import Carousel from '../components/Carousel';
import Category from '../components/Category';
import PopularElectronics from '../components/PopularElectronics';
import superSale from '../assets/carousel/super-sale.png';
import dreamHome from '../assets/carousel/dreamHome.png';

const Home = () => (
    <div>
      <Carousel img={superSale} slides={1} />
      <Category />
      <PopularElectronics title="Популярная компьютерная техника" />
      <Carousel img={dreamHome} slides={1} />
      <PopularElectronics title="Хит продаж" />
      <PopularElectronics title="На основе просморов" />
      <Carousel img={dreamHome} slides={1} />
    </div>
  );

export default Home;
