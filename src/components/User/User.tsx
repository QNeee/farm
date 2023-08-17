import { Outlet } from 'react-router';
import styled from 'styled-components';
import { NavLinkStyled } from '../Header/Header.styled';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  font-family: 'Montserrat';
  padding: 0 0 30px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 5px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
  border: 1px solid rgba(255, 255, 255, 0.18);
`;
const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const User = () => {
  return (
    <Container>
      <NavContainer>
        <NavLinkStyled
          style={{ minWidth: '33.3%', margin: 0, borderRadius: 0 }}
          to="/user/balance"
        >
          Баланс
        </NavLinkStyled>
        <NavLinkStyled
          style={{ minWidth: '33.3%', margin: 0, borderRadius: 0 }}
          to="/user/profile"
        >
          Профіль
        </NavLinkStyled>
        <NavLinkStyled
          style={{ minWidth: '33.3%', margin: 0, borderRadius: 0 }}
          to="/user/bonuses"
        >
          Бонуси
        </NavLinkStyled>
      </NavContainer>
      <Outlet />
    </Container>
  );
};
export default User;
