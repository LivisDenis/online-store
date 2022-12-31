import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import userLogo from '../assets/header/User.svg';
import ProfileMenu from './ProfileMenu';
import { useBearStore } from '../store/store';

const authMethod = [
  { name: 'Войти', route: LOGIN_ROUTE, style: 'bg-green-500 text-white' },
  { name: 'Через номер телефона', route: LOGIN_ROUTE, style: 'bg-orange-500 text-white' },
  {
    name: 'Регистрация через email',
    route: REGISTRATION_ROUTE,
    style: 'border-2 border-green-500 bg-white text-black'
  }
];

const AuthModal = () => {
  const { setUser, setIsAuth, isAuth, user } = useBearStore();
  let [isOpen, setIsOpen] = useState(false);

  const logOut = () => {
    setUser(null);
    localStorage.removeItem('token');
    setIsAuth(false);
  };

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      {isAuth && <ProfileMenu logOut={logOut} role={user?.role} />}
      {!isAuth && (
        <button onClick={openModal}>
          <img src={userLogo} alt='img' className='mx-auto h-[26px] w-[26px]' />
          <p className='mt-2 text-[14px]'>Войти</p>
        </button>
      )}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
              >
                <Dialog.Panel>
                  <div className='mx-auto flex max-w-[450px] flex-col flex-col items-center justify-center rounded-[10px] bg-gray-200 px-[60px] py-[77px]'>
                    <h2 className='text-start text-[30px] font-medium leading-6 text-gray-900'>
                      Войдите или зарегистрируйтесь
                    </h2>
                    <div className='mt-5 [&_button]:mt-[10px] [&_button]:w-full [&_button]:rounded-[10px] [&_button]:p-[10px]'>
                      {authMethod.map((auth, i) => (
                        <Link key={i} to={auth.route}>
                          <button onClick={closeModal} className={auth.style}>
                            {auth.name}
                          </button>
                        </Link>
                      ))}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default AuthModal;
