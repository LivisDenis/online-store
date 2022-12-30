import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import { HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts.js';
import { login, registration } from '../http/userAPI';
import { useBearStore } from '../store/store';

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState('admin@admin.admin');
  const [password, setPassword] = useState('123456');
  const [error, setError] = useState('');

  const { setUser, setIsAuth } = useBearStore();

  const check = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password);
      }
      setUser(data);
      setIsAuth(true);
      navigate(HOME_ROUTE);
    } catch (err) {
      if (err instanceof AxiosError) {
        setError(err.response?.data.message.message);
      }
    }
  };

  return (
    <div className='mt-40 flex items-center justify-center'>
      <div className='flex w-full max-w-[450px] flex-col rounded-[10px] bg-gray-200 px-[60px] py-[77px]'>
        <h2 className='text-[30px] font-medium leading-6 text-gray-900'>
          {isLogin ? 'Авторизация' : 'Регистрация'}
        </h2>
        <form className={'mt-2'}>
          <div className={'relative w-full'}>
            <input
              className='mt-7 h-10 w-full rounded-[10px] py-[10px] pl-6'
              type='email'
              placeholder='E-mail'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className='absolute left-0 text-[14px] text-red-500'>{error}</div>
          </div>
          <input
            className='mt-6 h-10 w-full rounded-[10px] py-[10px] pl-6'
            type='password'
            placeholder='Пароль'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className='mt-6 w-full rounded-[10px] bg-green-500 p-[10px] text-white text-white'
            onClick={check}
          >
            {isLogin ? 'Войти' : 'Зарегестрироваться'}
          </button>
        </form>
        <div className='m-0 mt-3 text-center'>
          {isLogin ? (
            <div>
              Нет аккаунта?
              <Link to={REGISTRATION_ROUTE} className='ml-2 text-blue-600'>
                Зарегестрируйтесь
              </Link>
            </div>
          ) : (
            <div>
              Уже есть аккаунт?
              <Link to={LOGIN_ROUTE} className='ml-2 text-blue-600'>
                Войдите
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
