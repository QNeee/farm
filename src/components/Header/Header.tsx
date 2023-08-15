import { useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Lottie from 'lottie-react';
import { useMediaQuery } from 'react-responsive';
import { AiOutlineLogin, AiOutlineLogout } from 'react-icons/ai';
import { GiBandit, GiRollingDices } from 'react-icons/gi';
import {
  ControlledMenu,
  Menu,
  MenuItem,
  useHover,
  useMenuState,
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import AppBar from '../Appbar';
import {
  HeaderStyled,
  NavLinkStyled,
  NavigationStyled,
  Logo,
  Button,
  HeaderContainer,
  ButtonBurgerStyle,
  ControlledMenuStyle,
} from './Header.styled';
import { AppDispatch } from '../../redux/store';
import { getToken } from '../../redux/auth/authSelectors';
import { logout } from '../../redux/auth/authOperations';
import burgerAnimation from '../../utils/burger.json';

const Header: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(getToken);
  const { pathname } = useLocation();
  const onClickLogout = () => {
    dispatch(logout());
  };
  const ref = useRef(null);
  const [menuState, toggle] = useMenuState({ transition: true });
  const { anchorProps, hoverProps } = useHover(menuState.state, toggle);

  const namePath = pathname.split('/')[1];
  const isWide = useMediaQuery({ minWidth: 768 });
  const isNarrow = useMediaQuery({ maxWidth: 767 });
  const onClickMenuItem = (flag: string) => {
    navigate(flag);
  }
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
            <NavigationStyled>
              {token ? (
                <>
                  <div ref={ref} {...anchorProps}>
                    <AppBar />
                  </div>
                  <ControlledMenuStyle
                    arrow={true}
                    gap={14}
                    {...hoverProps}
                    {...menuState}
                    anchorRef={ref}
                    onClose={() => toggle(false)}
                  >
                    <MenuItem onClick={() => onClickMenuItem('user/balance')}>Баланс</MenuItem>
                    <MenuItem onClick={() => onClickMenuItem('user/profile')}>Профиль</MenuItem>
                    <MenuItem onClick={() => onClickMenuItem('user/bonuses')}>Бонуси</MenuItem>

                  </ControlledMenuStyle>
                </>
              ) : null}
            </NavigationStyled>
            {token || namePath === 'demoSlots' || namePath === 'demoCubics' ? (
              <NavigationStyled>
                <NavLinkStyled to={token ? '/slots' : 'demoSlots'}>
                  <GiBandit
                    style={{ width: 24, height: 24, marginRight: 10 }}
                  />
                  Слоти
                </NavLinkStyled>
              </NavigationStyled>
            ) : null}
            {token || namePath === 'demoSlots' || namePath === 'demoCubics' ? (
              <NavigationStyled>
                <NavLinkStyled to={token ? '/cubics' : 'demoCubics'}>
                  <GiRollingDices
                    style={{ width: 24, height: 24, marginRight: 10 }}
                  />
                  Покер на кістках
                </NavLinkStyled>
              </NavigationStyled>
            ) : null}
            <NavigationStyled>
              {token ? (
                <Button onClick={onClickLogout} title="Вихід">
                  <AiOutlineLogout
                    style={{ width: 24, height: 24, marginRight: 10 }}
                  />
                  Вихід
                </Button>
              ) : null}
            </NavigationStyled>
            <NavigationStyled>
              {!token ? (
                <NavLinkStyled to={'/login'}>
                  <AiOutlineLogin
                    style={{ width: 24, height: 24, marginRight: 10 }}
                  />
                  Увійти
                </NavLinkStyled>
              ) : null}
            </NavigationStyled>
          </NavigationStyled>
        )}
        {isNarrow && (
          <>
            {token ? (
              <>
                <div ref={ref} {...anchorProps}>
                  <AppBar />
                </div>
                <ControlledMenuStyle
                  arrow={true}
                  gap={14}
                  {...hoverProps}
                  {...menuState}
                  anchorRef={ref}
                  onClose={() => toggle(false)}
                >
                  <MenuItem onClick={() => onClickMenuItem('user/balance')}>Баланс</MenuItem>
                  <MenuItem onClick={() => onClickMenuItem('user/profile')}>Профиль</MenuItem>
                  <MenuItem onClick={() => onClickMenuItem('user/bonuses')}>Бонуси</MenuItem>

                </ControlledMenuStyle>
              </>
            ) : null}
            {token || namePath === 'demoSlots' || namePath === 'demoCubics' ? (
              <Menu
                menuButton={
                  <ButtonBurgerStyle>
                    <Lottie
                      style={{ height: 32, width: 32 }}
                      animationData={burgerAnimation}
                    />
                  </ButtonBurgerStyle>
                }
                arrow={true}
                gap={12}
                transition
              >
                <MenuItem>
                  <NavLinkStyled to={token ? '/slots' : 'demoSlots'}>
                    <GiBandit style={{ marginRight: 5 }} />
                    Слоти
                  </NavLinkStyled>
                </MenuItem>
                <MenuItem>
                  <NavLinkStyled to={token ? '/cubics' : 'demoCubics'}>
                    <GiRollingDices style={{ marginRight: 5 }} />
                    Покер на кістках
                  </NavLinkStyled>
                </MenuItem>
                <MenuItem>
                  {token ? (
                    <Button title="Вийти" onClick={onClickLogout}>
                      <AiOutlineLogout style={{ marginRight: 5 }} />
                      Вийти
                    </Button>
                  ) : null}
                </MenuItem>
              </Menu>
            ) : null}
            {!token ? (
              <NavLinkStyled to={'/login'}>Увійти</NavLinkStyled>
            ) : null}
          </>
        )}
      </HeaderStyled>
    </HeaderContainer>
  );
};

export { Header };
