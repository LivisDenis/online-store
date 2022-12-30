import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import { check } from './http/userAPI';
import { useBearStore } from './store/store';

const App = () => {
  const [loading, setLoading] = useState(true);

  const { setUser, setIsAuth } = useBearStore();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      check()
        .then((data) => {
          console.log(data);
          setUser(data);
          setIsAuth(true);
        })
        .finally(() => setLoading(false));
    }
  }, []);

  return (
    <BrowserRouter>
      <div className={'mx-auto max-w-[1205px] px-[15px]'}>
        <NavBar />
        <AppRouter />
      </div>
    </BrowserRouter>
  );
};

export default App;
