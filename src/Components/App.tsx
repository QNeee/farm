import { Auth } from "./Auth/Auth";
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from "./Layout/Layout";
import SlotsContainer from "./SlotsContainer/SlotsContainer";
import { useSelector } from "react-redux";
import { getToken } from "../Redux/chatSlice";
import { SlotApp } from "./SlotApp/SlotApp";

const App = () => {
  const token = useSelector(getToken);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
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
