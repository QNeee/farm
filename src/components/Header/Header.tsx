import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect, useRef } from 'react';
import Lottie from 'lottie-react';
import { useMediaQuery } from 'react-responsive';

import AppBar from '../Appbar';
import {
  HeaderStyled,
  NavLinkStyled,
  NavigationStyled,
  Logo,
  Button,
  HeaderContainer,
  Modal,
} from './Header.styled';
import { AppDispatch } from '../../redux/store';
import { getToken } from '../../redux/auth/authSelectors';
import { logout } from '../../redux/auth/authOperations';
import { HOST } from '../../host';
import burgerAnimation from '../../utils/burger.json';
import { AiOutlineLogin, AiOutlineLogout } from 'react-icons/ai';
import { MdAppRegistration } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';

const Header = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(getToken);
  const [isOpen, setIsOpen] = useState(false);

  const onClickLogout = () => {
    dispatch(logout());
  };

  const handleMenuClick = () => {
    setIsOpen(false);
  };

  const handleMenuOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    const target = e.target as Node;
    if (modalRef.current && !modalRef.current.contains(target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const isWide = useMediaQuery({ minWidth: 768 });
  const isNarrow = useMediaQuery({ maxWidth: 767 });

  return (
    <HeaderContainer>
      <HeaderStyled>
        <Logo
          onClick={() => navigate('/')}
          src="https://cdn-icons-png.flaticon.com/128/2298/2298580.png"
          alt="Logo"
        />
        {isWide && (
          <NavigationStyled>
            {!token ? <NavLinkStyled to={'/login'}>Вхід</NavLinkStyled> : null}
            {!token ? (
              <NavLinkStyled to={'/register'}>Реєстрація</NavLinkStyled>
            ) : null}
            {token ? <AppBar /> : null}
            <NavLinkStyled to={'/slots'}>Слоти</NavLinkStyled>
            <NavLinkStyled to={'/cubics'}>КубікПокер</NavLinkStyled>
            {!token ? (
              <NavLinkStyled to={HOST + '/auth/google'}>google</NavLinkStyled>
            ) : null}
            {token ? <Button onClick={onClickLogout}>Вийти</Button> : null}
          </NavigationStyled>
        )}
        {isNarrow && (
          <>
            <NavigationStyled>
              {!token ? (
                <NavLinkStyled to={'/login'}>
                  <AiOutlineLogin /> Вхід
                </NavLinkStyled>
              ) : null}
              {!token ? (
                <NavLinkStyled to={'/register'}>
                  <MdAppRegistration />
                  Реєстрація
                </NavLinkStyled>
              ) : null}
              {token ? <AppBar /> : null}
              {!token ? (
                <NavLinkStyled
                  to={HOST + '/auth/google'}
                  title="Google авторизація"
                >
                  <FcGoogle />
                </NavLinkStyled>
              ) : null}
              {token ? (
                <Button title="Вийти" onClick={onClickLogout}>
                  <AiOutlineLogout />
                </Button>
              ) : null}
            </NavigationStyled>

            <Lottie
              style={{ height: 32, width: 32 }}
              animationData={burgerAnimation}
              onClick={handleMenuOpen}
            />
          </>
        )}
        {isOpen && (
          <Modal>
            <NavLinkStyled to={'/slots'} onClick={handleMenuClick}>
              Слоти
            </NavLinkStyled>
            <NavLinkStyled to={'/cubics'} onClick={handleMenuClick}>
              КубікПокер
            </NavLinkStyled>
          </Modal>
        )}
      </HeaderStyled>
    </HeaderContainer>
  );
};

export default Header;
