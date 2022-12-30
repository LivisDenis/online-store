import { Dialog, Transition } from '@headlessui/react';
import React, {Fragment, useState} from 'react';
import { Link } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import user from "../assets/header/User.svg";
import ProfileDropdown from "./ProfileDropdown";
import {useBearStore} from "../store/store";

const AuthModal = () => {
    const { setUser, setIsAuth, isAuth } = useBearStore();
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
        {isAuth && <ProfileDropdown logOut={logOut} />}
        {!isAuth && (
            <button onClick={openModal}>
              <img src={user} alt='img' className='mx-auto h-[26px] w-[26px]' />
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
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
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
                // leave="ease-in duration-200"
                // leaveFrom="opacity-100 scale-100"
                // leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel>
                  <div className='mx-auto flex max-w-[450px] flex-col flex-col items-center justify-center rounded-[10px] bg-gray-200 px-[60px] py-[77px]'>
                    <h2 className='text-start text-[30px] font-medium leading-6 text-gray-900'>
                      Войдите или зарегистрируйтесь
                    </h2>
                    <div className='[&_button]:mt-[10px] [&_button]:w-full [&_button]:rounded-[10px] [&_button]:p-[10px]'>
                      <Link to={LOGIN_ROUTE}>
                        <button onClick={closeModal} className='mt-5 bg-green-500 text-white'>
                          Войти
                        </button>
                      </Link>
                      <Link to={LOGIN_ROUTE}>
                        <button onClick={closeModal} className='bg-orange-500 text-white'>
                            Через номер телефона
                        </button>
                      </Link>
                      <Link to={REGISTRATION_ROUTE}>
                        <button onClick={closeModal} className='border-2 border-green-500 bg-white hover:text-black'>
                          Регистрация через email
                        </button>
                      </Link>
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
