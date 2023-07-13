import { useEffect } from "react";
import { Auth } from "./Auth/Auth";
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from "./Layout/Layout";
import SlotsContainer from "./SlotsContainer/SlotsContainer";
import { useDispatch, useSelector } from "react-redux";
import { getIsLoggedIn, getToken } from "../Redux/chatSlice";
import { SlotApp } from "./SlotApp/SlotApp";
import { AppDispatch } from "../Redux/store";
import { refresh } from "../Redux/authOperations";
import HomePage from "./HomePage/HomePage";

const App = () => {
  const dispatch: AppDispatch = useDispatch();
  const token = useSelector(getToken);
  const isLoggedIn = useSelector(getIsLoggedIn);
  useEffect(() => {
    if (isLoggedIn)
      dispatch(refresh());
  }, [dispatch, isLoggedIn])
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<HomePage />} />
          <Route path='login' element={!token ? <Auth /> : <Navigate to={'/slots'} replace />} />
          <Route path='register' element={!token ? <Auth /> : <Navigate to={'/slots'} replace />} />
          <Route path='slots' element={token ? <SlotsContainer /> : <Navigate to={'/login'} replace />} />
          <Route path='slots/:id' element={token ? <SlotApp /> : <Navigate to={'/login'} replace />} />
        </Route>
      </Routes>

    </>
  );
};

export default App;
