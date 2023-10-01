import { Outlet } from 'react-router';
import styled from 'styled-components';
import { NavLinkStyled } from '../Header/Header.styled';
import { useSelector } from 'react-redux';
import { getLanguage } from '../../redux/auth/authSelectors';
import { Container, NavContainer, NavLinkStyledPlus } from './User.styled';

const User = () => {
  const language = useSelector(getLanguage);
  return (
    <Container>
      <NavContainer>
        <NavLinkStyledPlus to="/user/balance">
          {language === 'en'
            ? 'Balance'
            : language === 'ru'
            ? 'Баланс'
            : 'Баланс'}
        </NavLinkStyledPlus>
        <NavLinkStyledPlus to="/user/profile">
          {language === 'en'
            ? 'Profile'
            : language === 'ru'
            ? 'Профиль'
            : 'Профіль'}
        </NavLinkStyledPlus>
        <NavLinkStyledPlus to="/user/bonuses">
          {language === 'en'
            ? 'Bonuses'
            : language === 'ru'
            ? 'Бонусы'
            : 'Бонуси'}
        </NavLinkStyledPlus>
      </NavContainer>
      <Outlet />
    </Container>
  );
};
export default User;
