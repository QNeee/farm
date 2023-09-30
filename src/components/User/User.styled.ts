import styled from 'styled-components';
import { NavLinkStyled } from '../Header/Header.styled';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  font-weight: 500px;
  padding: 0 0 30px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 5px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NavLinkStyledPlus = styled(NavLinkStyled)`
  min-width: 33.3%;
  margin: 0;
  border-radius: 0;
`;
