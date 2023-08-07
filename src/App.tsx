import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from './redux/store';

import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import Layout from './components/Layout/Layout';
import { Auth } from './components/Auth';
import SlotsContainer from './components/SlotsContainer/SlotsContainer';
import { SlotApp } from './components/SlotApp';
import CubicsApp from './components/Cubics/CubicsApp';
import { NewSlotTest } from './components/Slot';
import TestPage from './template/TestPage';
import { getIsLoggedIn, getToken } from './redux/auth/authSelectors';
import { refresh } from './redux/auth/authOperations';
import Google from './components/Google/Google';

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
            path="google"
            element={!token ? <Google /> : <Navigate to={'/slots'} replace />}
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
            path="cubics"
            element={token ? <CubicsApp /> : <Navigate to={'/login'} replace />}
          />
          <Route
            path="test"
            element={!token ? <Auth /> : <Navigate to={'/slots'} replace />}
          />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
