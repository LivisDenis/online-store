import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts.js';
import { login, registration } from '../http/userAPI';
import { useBearStore } from '../store/store';

const Auth = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { setUser, setIsAuth } = useBearStore();

  const check = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password);
      }
      setUser(data);
      setIsAuth(true);
      navigate(SHOP_ROUTE);
    } catch (err) {
      if (err instanceof AxiosError) {
        setError(err.response?.data.message.message);
      }
    }
  };

  return (
    <div
      className='d-flex justify-content-center align-items-center'
      style={{ height: window.innerHeight - 164 }}
    >
      <form style={{ width: 600 }} className='bg-light p-4'>
        <h2 className='text-center'>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
        <input
          className='mt-3'
          type='email'
          placeholder='Enter email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className='mt-3'
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className='text-danger'>{error}</div>
        <div className='m-0 mt-3'>
          {isLogin ? (
            <div className='p-0'>
              Нет аккаунта?
              <NavLink className='ms-2' to={REGISTRATION_ROUTE}>
                Зарегестрируйтесь
              </NavLink>
            </div>
          ) : (
            <div className='p-0'>
              Уже есть аккаунт?
              <NavLink className='ms-2' to={LOGIN_ROUTE}>
                Войдите
              </NavLink>
            </div>
          )}
          <button className='mt-3' onClick={check}>
            {isLogin ? 'Войти' : 'Зарегестрироваться'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Auth;
