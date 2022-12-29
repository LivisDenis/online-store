import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts.js';
import { useBearStore } from '../store/store';
import Catalog from './Catalog';
import Search from './Search';
import user from '../assets/header/User.svg';
import bag from '../assets/header/Bag.svg';
import favourite from '../assets/header/Favourite.svg';
import basket from '../assets/header/Basket.svg';

const NavbarAssets = [
  { img: user, title: 'Войти' },
  { img: bag, title: 'Заказы', count: 5 },
  { img: favourite, title: 'Избранные', count: 5 },
  { img: basket, title: 'Корзина', count: 5 }
];

const NavBar = () => {
  const navigate = useNavigate();
  const { setUser, setIsAuth, isAuth } = useBearStore();

  const logOut = () => {
    setUser(null);
    localStorage.removeItem('token');
    setIsAuth(false);
  };

  return (
    <>
      {/* <Navbar bg='light' expand='lg'> */}
      {/*  <Container> */}
      {/*    <NavLink style={{ color: '#426675' }} to={SHOP_ROUTE}> */}
      {/*      Online-store */}
      {/*    </NavLink> */}
      {/*    <Navbar.Collapse id='basic-navbar-nav'> */}
      {/*      {isAuth ? ( */}
      {/*        <Nav className='ms-auto'> */}
      {/*          <Button onClick={() => navigate(ADMIN_ROUTE)}>Админ панель</Button> */}
      {/*          <Button className='ms-4' onClick={() => navigate(BASKET_ROUTE)}> */}
      {/*            Корзина */}
      {/*          </Button> */}
      {/*          <Button className='ms-4' onClick={() => logOut()}> */}
      {/*            Выйти */}
      {/*          </Button> */}
      {/*        </Nav> */}
      {/*      ) : ( */}
      {/*        <Nav className='ms-auto'> */}
      {/*          <Button onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button> */}
      {/*        </Nav> */}
      {/*      )} */}
      {/*    </Navbar.Collapse> */}
      {/*  </Container> */}
      {/* </Navbar> */}
      <div className='flex items-center justify-between py-[30px]'>
        <img src='/' alt='logo' />
        <Catalog />
        <Search />
        <ul className='flex'>
          {NavbarAssets.map((item, i) => (
            <li key={i} className='ml-[45px] flex flex-col items-center'>
              <button className='relative'>
                <img src={item.img} alt='img' className='h-[26px] w-[26px]' />
                {item.count && (
                  <span className='absolute top-[-5px] right-[-13px] flex h-[18px] w-[18px] items-center justify-center rounded-full bg-green-500 text-[10px]'>
                    {item.count}
                  </span>
                )}
              </button>
              <p className='mt-2 text-[14px]'>{item.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NavBar;
