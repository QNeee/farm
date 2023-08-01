import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
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
} from './Header.styled';
import { AppDispatch } from '../../redux/store';
import { getToken } from '../../redux/auth/authSelectors';
import { logout } from '../../redux/auth/authOperations';
import { HOST } from '../../host';
import burgerAnimation from '../../utils/burger.json';

const Header = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(getToken);
  const [isOpen, setIsOpen] = useState(false);

  const onClickLogout = () => {
    dispatch(logout());
  };

  const openMenu = () => {
    setIsOpen((prev) => !prev);
  };

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
          <Lottie
            style={{ height: 32, width: 32 }}
            animationData={burgerAnimation}
            onClick={openMenu}
          />
        )}
        {isOpen && (
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
      </HeaderStyled>
    </HeaderContainer>
  );
};

export default Header;
