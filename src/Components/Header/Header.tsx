import React from "react";
import styled from "styled-components";
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "../../Redux/chatSlice";
import AppBar from "../Appbar/Appbar";
import { AppDispatch } from "../../Redux/store";
import { logout } from "../../Redux/authOperations";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  background-color: #f2f2f2;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
  }
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: center;
    margin-top: 10px;
  }
`;

const NavLinkk = styled(NavLink)`
  margin-right: 20px;
  font-size: 18px;
  color: #333;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    margin-right: 10px;
    font-size: 16px;
  }
`;


const HeaderComponent = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(getToken);
  const onClickLogout = () => {

    dispatch(logout());
  }

  return <Header>
    <Logo onClick={() => navigate('/')} src="https://cdn-icons-png.flaticon.com/128/2298/2298580.png" alt="Logo" />
    <Navigation>
      {!token ? <NavLinkk to={"/login"}>Вхід</NavLinkk> : null}
      {!token ? <NavLinkk to={"/register"}>Реєстрація</NavLinkk> : null}
      {token ? <AppBar /> : null}
      <NavLinkk to={"/slots"}>Слоти</NavLinkk>
      {token ? <button onClick={onClickLogout} style={{ backgroundColor: 'red', color: 'white', borderRadius: '4px', padding: '8px 16px', border: 'none', cursor: 'pointer' }}>
        Вийти
      </button> : null}
    </Navigation>
  </Header>
}
export default HeaderComponent;