import {
  ADMIN_ROUTE,
  AUTH_ROUTE,
  BASKET_ROUTE,
  DEVICE_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE
} from './consts';
import Admin from '../pages/Admin';
import Basket from '../pages/Basket';
import Auth from '../pages/Auth';
import DevicePage from '../pages/DevicePage';
import Shop from '../pages/Shop';
import Home from '../pages/Home';
import AuthChoice from '../pages/AuthChoice';

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin
  },
  {
    path: BASKET_ROUTE,
    Component: Basket
  }
];

export const publicRoutes = [
  {
    path: AUTH_ROUTE,
    Component: AuthChoice
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth
  },
  {
    path: DEVICE_ROUTE + '/:id',
    Component: DevicePage
  },
  {
    path: HOME_ROUTE,
    Component: Home
  }
];
