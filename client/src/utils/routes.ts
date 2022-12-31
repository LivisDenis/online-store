import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  CREATE_ROUTE,
  DEVICE_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE
} from './consts';
import Basket from '../pages/Basket';
import Auth from '../pages/Auth';
import DevicePage from '../pages/DevicePage';
import Shop from '../pages/Shop';
import Home from '../pages/Home';

export const authRoutes = [
  {
    path: BASKET_ROUTE,
    Component: Basket
  }
];

export const publicRoutes = [
  {
    path: REGISTRATION_ROUTE,
    Component: Auth
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth
  },
  {
    path: `${DEVICE_ROUTE}/:id`,
    Component: DevicePage
  },
  {
    path: HOME_ROUTE,
    Component: Home
  }
];
