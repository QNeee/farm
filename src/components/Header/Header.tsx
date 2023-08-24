import { useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Lottie from 'lottie-react';
import { useMediaQuery } from 'react-responsive';
import { AiOutlineLogin, AiOutlineLogout } from 'react-icons/ai';
import {
  GiBandit,
  GiBrightExplosion,
  GiDualityMask,
  GiMoneyStack,
  GiRollingDices,
} from 'react-icons/gi';
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
  NavStyled,
  Logo,
  Button,
  HeaderContainer,
  ButtonBurgerStyle,
  ControlledMenuStyle,
  NewNavStyled,
} from './Header.styled';
import { AppDispatch } from '../../redux/store';
import { getLanguage, getToken } from '../../redux/auth/authSelectors';
import { logout } from '../../redux/auth/authOperations';
import burgerAnimation from '../../utils/burger.json';
import { ImProfile } from 'react-icons/im';
import { setLanguage } from '../../redux/auth/authSlice';

const Header: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(getToken);
  const { pathname } = useLocation();
  const language = useSelector(getLanguage);
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
  };
  return (
    <HeaderContainer>
      <HeaderStyled>
        <Logo
          onClick={() => navigate('/')}
          src="https://cdn-icons-png.flaticon.com/128/2298/2298580.png"
          alt="Logo"
        />
        <select
          style={{ position: 'relative', zIndex: 2323 }}
          defaultValue={language}
          onChange={(e) => dispatch(setLanguage(e.target.value))}
        >
          <option value="en">en</option>
          <option value="ru">ru</option>
          <option value="ukr">ukr</option>
        </select>
        {isWide && (
          <NavigationStyled>
            <NavigationStyled>
              {token ? (
                <>
                  <NewNavStyled path={namePath} ref={ref} {...anchorProps}>
                    <GiDualityMask
                      style={{ width: 24, height: 24, marginRight: 10 }}
                    />
                    <AppBar />
                  </NewNavStyled>
                  <ControlledMenuStyle
                    arrow={true}
                    gap={14}
                    {...hoverProps}
                    {...menuState}
                    anchorRef={ref}
                    onClose={() => toggle(false)}
                  >
                    <MenuItem onClick={() => onClickMenuItem('user/balance')}>
                      <GiMoneyStack
                        style={{ width: 24, height: 24, marginRight: 10 }}
                      />
                      {language === 'en'
                        ? 'Balance'
                        : language === 'ru'
                        ? 'Баланс'
                        : 'Баланс'}
                    </MenuItem>
                    <MenuItem onClick={() => onClickMenuItem('user/profile')}>
                      <GiDualityMask
                        style={{ width: 24, height: 24, marginRight: 10 }}
                      />
                      {language === 'en'
                        ? 'Profile'
                        : language === 'ru'
                        ? 'Профиль'
                        : 'Профіль'}
                    </MenuItem>
                    <MenuItem onClick={() => onClickMenuItem('user/bonuses')}>
                      <GiBrightExplosion
                        style={{ width: 24, height: 24, marginRight: 10 }}
                      />
                      {language === 'en'
                        ? 'Bonuses'
                        : language === 'ru'
                        ? 'Бонусы'
                        : 'Бонуси'}
                    </MenuItem>
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
                  {language === 'en'
                    ? 'Slots'
                    : language === 'ru'
                    ? 'Слоты'
                    : 'Cлоти'}
                </NavLinkStyled>
              </NavigationStyled>
            ) : null}
            {token || namePath === 'demoSlots' || namePath === 'demoCubics' ? (
              <NavigationStyled>
                <NavLinkStyled to={token ? '/cubics' : 'demoCubics'}>
                  <GiRollingDices
                    style={{ width: 24, height: 24, marginRight: 10 }}
                  />
                  {language === 'en'
                    ? 'Cubics Poker'
                    : language === 'ru'
                    ? 'Покер на костях'
                    : 'Покер на кістках'}
                </NavLinkStyled>
              </NavigationStyled>
            ) : null}
            <NavigationStyled>
              {token ? (
                <Button onClick={onClickLogout} title="Вихід">
                  <AiOutlineLogout
                    style={{ width: 24, height: 24, marginRight: 10 }}
                  />
                  {language === 'en'
                    ? 'Exit'
                    : language === 'ru'
                    ? 'Выход'
                    : 'Вихід'}
                </Button>
              ) : null}
            </NavigationStyled>
            <NavigationStyled>
              {!token ? (
                <NavLinkStyled to={'/login'}>
                  <AiOutlineLogin
                    style={{ width: 24, height: 24, marginRight: 10 }}
                  />
                  {language === 'en'
                    ? 'Login'
                    : language === 'ru'
                    ? 'Войти'
                    : 'Увійти'}
                </NavLinkStyled>
              ) : null}
            </NavigationStyled>
          </NavigationStyled>
        )}
        {isNarrow && (
          <>
            {token ? (
              <>
                <NewNavStyled path={namePath} ref={ref} {...anchorProps}>
                  <GiDualityMask style={{ marginRight: 5 }} />
                  <AppBar />
                </NewNavStyled>
                <ControlledMenuStyle
                  arrow={true}
                  gap={14}
                  {...hoverProps}
                  {...menuState}
                  anchorRef={ref}
                  onClose={() => toggle(false)}
                >
                  <MenuItem onClick={() => onClickMenuItem('user/balance')}>
                    <GiMoneyStack style={{ marginRight: 5 }} />
                    {language === 'en'
                      ? 'Balance'
                      : language === 'ru'
                      ? 'Баланс'
                      : 'Баланс'}
                  </MenuItem>
                  <MenuItem onClick={() => onClickMenuItem('user/profile')}>
                    <GiDualityMask style={{ marginRight: 5 }} />
                    {language === 'en'
                      ? 'Profile'
                      : language === 'ru'
                      ? 'Профиль'
                      : 'Профіль'}
                  </MenuItem>
                  <MenuItem onClick={() => onClickMenuItem('user/bonuses')}>
                    <GiBrightExplosion style={{ marginRight: 5 }} />
                    {language === 'en'
                      ? 'Bonuses'
                      : language === 'ru'
                      ? 'Бонусы'
                      : 'Бонуси'}
                  </MenuItem>
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
                    {language === 'en'
                      ? 'Slots'
                      : language === 'ru'
                      ? 'Слоты'
                      : 'Cлоти'}
                  </NavLinkStyled>
                </MenuItem>
                <MenuItem>
                  <NavLinkStyled to={token ? '/cubics' : 'demoCubics'}>
                    <GiRollingDices style={{ marginRight: 5 }} />
                    {language === 'en'
                      ? 'Cubics Poker'
                      : language === 'ru'
                      ? 'Покер на костях'
                      : 'Покер на кістках'}
                  </NavLinkStyled>
                </MenuItem>
                <MenuItem>
                  {token ? (
                    <Button title="Вийти" onClick={onClickLogout}>
                      <AiOutlineLogout style={{ marginRight: 5 }} />
                      {language === 'en'
                        ? 'Exit'
                        : language === 'ru'
                        ? 'Выход'
                        : 'Вихід'}
                    </Button>
                  ) : null}
                </MenuItem>
              </Menu>
            ) : null}
            {!token ? (
              <NavLinkStyled to={'/login'}>
                {language === 'en'
                  ? 'Login'
                  : language === 'ru'
                  ? 'Войти'
                  : 'Увійти'}
              </NavLinkStyled>
            ) : null}
          </>
        )}
      </HeaderStyled>
    </HeaderContainer>
  );
};

export { Header };
