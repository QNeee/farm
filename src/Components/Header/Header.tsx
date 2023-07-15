import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getToken } from '../../redux/chatSlice';
import AppBar from '../Appbar';
import { AppDispatch } from '../../redux/store';
import { logout } from '../../redux/authOperations';
import {
  HeaderStyled,
  NavLinkStyled,
  NavigationStyled,
  Logo,
  Button,
} from './Header.styled';

const Header = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(getToken);
  const onClickLogout = () => {
    dispatch(logout());
  };

  return (
    <HeaderStyled>
      <Logo
        onClick={() => navigate('/')}
        src="https://cdn-icons-png.flaticon.com/128/2298/2298580.png"
        alt="Logo"
      />
      <NavigationStyled>
        {!token ? <NavLinkStyled to={'/login'}>Вхід</NavLinkStyled> : null}
        {!token ? (
          <NavLinkStyled to={'/register'}>Реєстрація</NavLinkStyled>
        ) : null}
        {token ? <AppBar /> : null}
        <NavLinkStyled to={'/slots'}>Слоти</NavLinkStyled>
        {token ? <Button onClick={onClickLogout}>Вийти</Button> : null}
      </NavigationStyled>
    </HeaderStyled>
  );
};

export default Header;
