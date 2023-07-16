import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderStyled = styled.header`
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

export const Logo = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

export const NavigationStyled = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: center;
    margin-top: 10px;
  }
`;

export const NavLinkStyled = styled(NavLink)`
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

export const Button = styled.button`
  background-color: red;
  color: white;
  border-radius: 4px;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
`;
