import React from 'react';
import { Link } from 'react-router-dom';
import { HOME_ROUTE, LOGIN_ROUTE } from '../utils/consts.js';
import Catalog from './Catalog';
import Search from './Search';
import bag from '../assets/header/Bag.svg';
import favourite from '../assets/header/Favourite.svg';
import basket from '../assets/header/Basket.svg';
import logo from '../assets/logo.svg';
import AuthModal from './AuthModal';

const NavbarAssets = [
  { img: bag, title: 'Заказы', count: 5, route: LOGIN_ROUTE },
  { img: favourite, title: 'Избранные', count: 5, route: LOGIN_ROUTE },
  { img: basket, title: 'Корзина', count: 5, route: LOGIN_ROUTE }
];

const NavBar = () => {

  return (
    <div className='flex items-center justify-between py-[30px]'>
      <Link to={HOME_ROUTE}>
        <img src={logo} alt='logo' />
      </Link>
      <Catalog />
      <Search />
      <ul className='flex'>
        <li className='relative ml-[45px] flex flex-col items-center'>
          <AuthModal/>
        </li>
        {NavbarAssets.map((item, i) => (
          <li key={i} className='ml-[45px] flex flex-col items-center'>
            <Link to={item.route} className='text-center'>
              <div className='relative'>
                <img src={item.img} alt='img' className='mx-auto h-[26px] w-[26px]' />
                {item.count && (
                  <span className='absolute top-[-5px] right-[-13px] flex h-[18px] w-[18px] items-center justify-center rounded-full bg-green-500 text-[10px]'>
                    {item.count}
                  </span>
                )}
              </div>
              <p className='mt-2 text-[14px]'>{item.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
