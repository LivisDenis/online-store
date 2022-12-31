import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../utils/routes';
import { useBearStore } from '../store/store';
import { CREATE_ROUTE, HOME_ROUTE } from '../utils/consts';
import Create from '../pages/Create';

const AppRouter = () => {
  const { isAuth, user } = useBearStore();

  return (
    <div>
      <Routes>
        {isAuth &&
          authRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        {publicRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        {user?.role === 'ADMIN' && <Route path={CREATE_ROUTE} element={<Create />} />}
        <Route path='*' element={<Navigate to={HOME_ROUTE} replace />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
