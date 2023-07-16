import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from './Redux/store';

import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import Layout from './Components/Layout/Layout';
import { Auth } from './Components/Auth';
import SlotsContainer from './Components/SlotsContainer/SlotsContainer';
import { SlotApp } from './Components/SlotApp';
import SlotTest from './Components/Slot/SlotTest';
import { getIsLoggedIn, getToken } from './Redux/chatSlice';
import { refresh } from './Redux/authOperations';
import NewSlotTest from './Components/Slot/NewSlotTest';

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
            element={token ? <NewSlotTest /> : <Navigate to={'/login'} replace />}
          />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
