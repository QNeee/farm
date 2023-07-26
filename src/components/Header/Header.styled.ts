import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-evenly;

  align-items: center;
  width: 320px;
  /* width: 100%; */
  padding: 20px;
  background-color: #f2f2f2;
  margin-bottom: 20px;
  /* outline: 2px solid tomato; */
  @media (min-width: 481px) {
    width: 481px;
    flex-direction: column;
    padding: 10px;
  }
  @media (min-width: 768px) {
    width: 768px;
    flex-direction: row;
    margin-bottom: 30px;
  }
  @media (min-width: 1025px) {
    width: 1025px;
    margin-bottom: 40px;
  }
  @media (min-width: 1281px) {
    width: 1281px;
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
  flex-wrap: wrap;
  margin-top: 10px;
`;

export const NavLinkStyled = styled(NavLink)`
  font-size: 18px;
  color: #333;
  line-height: 2.5;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }

  @media (min-width: 481px) {
    /* margin-right: 10px; */
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
  @media (min-width: 481px) {
    margin-left: 20px;
  }
`;
