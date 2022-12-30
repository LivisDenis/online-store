import React from 'react';
import { Link } from 'react-router-dom';
import headphones from '../assets/categories/headphones.png';
import camera from '../assets/categories/camera.png';
import macbook from '../assets/categories/macbook.png';
import robot from '../assets/categories/robot.png';
import CategoryItem from './CategoryItem';

const image = [
  { img: headphones, title: 'Электроника', price: '3000 usd' },
  { img: camera, title: 'Камера', price: '3000 usd' },
  { img: robot, title: 'Robot', price: '3000 usd' },
  { img: macbook, title: 'MacBook', price: '3000 usd' },
  { img: macbook, title: 'MacBook', price: '3000 usd' }
];

interface IPopularElectronics {
  title: string;
}

const PopularElectronics: React.FC<IPopularElectronics> = ({ title }) => (
  <section className='mt-20'>
    <h2 className='text-[30px]'>{title}</h2>
    <div className='mt-[40px] grid grid-cols-5 gap-[20px]'>
      {image.map((item, i) => (
        <Link to='' key={i}>
          <CategoryItem {...item} />
        </Link>
      ))}
    </div>
    <button className='mt-10 w-full rounded-[10px] bg-gray-200 p-3'>Показать еще</button>
  </section>
);

export default PopularElectronics;
