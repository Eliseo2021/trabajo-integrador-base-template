import React  from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import DashboardLayout from "./layouts/DashboardLayout";
import NotFound from "./layouts/NotFound";
import Dashboard from "./dashboard/Dashboard";
import Map from "./map/Map";
import Stadiums from "./stadiums/Stadiums";
import StadiumDetails from "./stadiums/StadiumDetails";
import Profile from './profile/Profile';
import Login from './login/Login';
import Signup from './signup/Signup';

const Routes = () => {
  return useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { path: '', element: <Dashboard /> },
        { path: 'Stadiums', element: <Stadiums /> },
        { path: 'Stadium/:id', element: <StadiumDetails /> },
        { path: 'Map', element: <Map /> },
        { path: 'Profile', element: <Profile /> },
        { path: 'Login', element: <Login /> },
        { path: 'Signup', element: <Signup /> },
      ]
    },
    {path: '/404', element: <NotFound/>},
    {path:'*', element: <Navigate to="/404" replace/>}
  ])
}

export default Routes;