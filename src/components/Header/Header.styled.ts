import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { size } from '../../utils/breakpoint';

export const HeaderContainer = styled.div`
  width: 100vw;
  background-color: rgba(255, 255, 0, 0.2);
  /* background-color: #f2f2f2; */
  border-bottom: 1px solid rgba(0, 0, 0, 1);
`;

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 320px;
  margin: 0 auto;
  padding: 2px 5px;

  @media (min-width: ${size.mobile}) {
    width: 480px;
    padding: 4px 15px;
  }
  @media (min-width: ${size.tablet}) {
    width: 768px;
    padding: 4px 20px;
  }
  @media (min-width: ${size.desktop}) {
    width: 1280px;
  }
  @media (min-width: ${size.large}) {
    width: 1440px;
  }
`;

export const Logo = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

export const NavigationStyled = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;

  @media (min-width: 480px) {
    flex-direction: row;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  font-size: 18px;
  color: #333;
  line-height: 2.5;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }

  @media (min-width: 480px) {
    margin-left: 10px;
  }

  @media (min-width: 768px) {
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
  @media (min-width: 480px) {
    margin-left: 20px;
  }
`;
