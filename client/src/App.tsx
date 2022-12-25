import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import { check } from './http/userAPI';
import { Spinner } from 'react-bootstrap';
import { useBearStore } from './store/store';

const App = () => {
  const [loading, setLoading] = useState(true);

  const { setUser, setIsAuth } = useBearStore();

  useEffect(() => {
    check()
      .then((data) => {
        console.log(data);
        setUser(data);
        setIsAuth(true);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      {loading ? <Spinner className='text-center' animation={'grow'} /> : <AppRouter />}
    </BrowserRouter>
  );
};

export default App;
