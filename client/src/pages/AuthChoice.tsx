import React from 'react';
import { Link } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';

const AuthChoice = () => {
  return (
    <div className='mx-auto mt-40 flex max-w-[450px] flex-col flex-col items-center justify-center rounded-[10px] bg-gray-200 px-[60px] py-[77px]'>
      <h2 className={'text-start text-[30px] font-medium leading-6 text-gray-900'}>
        Войдите или зарегистрируйтесь
      </h2>
      <div className='[&_button]:mt-[10px] [&_button]:w-full [&_button]:rounded-[10px] [&_button]:p-[10px]'>
        <Link to={LOGIN_ROUTE}>
          <button className={'mt-5 bg-green-500 text-white'}>Войти</button>
        </Link>
        <Link to={LOGIN_ROUTE}>
          <button className={'bg-orange-500 text-white'}>Через номер телефона</button>
        </Link>
        <Link to={REGISTRATION_ROUTE} className={'border-2 border-green-500 bg-white'}>
          <button className={'border-2 border-green-500 bg-white'}>Регистрация через email</button>
        </Link>
      </div>
    </div>
  );
};

export default AuthChoice;
