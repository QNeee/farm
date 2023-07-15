import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getIsLoggedIn, getToken } from './redux/chatSlice';
import { refresh } from './redux/authOperations';
import { AppDispatch } from './redux/store';

import SlotsContainer from './components/SlotsContainer';
import { Auth } from './components/Auth';
import Layout from './components/Layout';
import { SlotApp } from './components/SlotApp';
import SlotTest from './components/Slot';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  const dispatch: AppDispatch = useDispatch();
  const token = useSelector(getToken);
  const isLoggedIn = useSelector(getIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) dispatch(refresh());
  }, [dispatch, isLoggedIn]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route
            path="login"
            element={!token ? <Auth /> : <Navigate to={'/slots'} replace />}
          />
          <Route
            path="register"
            element={!token ? <Auth /> : <Navigate to={'/slots'} replace />}
          />
          <Route
            path="slots"
            element={
              token ? <SlotsContainer /> : <Navigate to={'/login'} replace />
            }
          />
          <Route
            path="slots/:id"
            element={token ? <SlotApp /> : <Navigate to={'/login'} replace />}
          />
          <Route
            path="test"
            element={token ? <SlotTest /> : <Navigate to={'/login'} replace />}
          />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
