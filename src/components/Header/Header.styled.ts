import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ControlledMenu, MenuButton } from '@szhsin/react-menu';
import {
  menuSelector,
  menuItemSelector,
  menuDividerSelector,
} from '@szhsin/react-menu/style-utils';

import { size } from '../../utils/breakpoint';

export const ControlledMenuStyle = styled(ControlledMenu)`
  ${menuSelector.name} {
    box-sizing: border-box;
    z-index: 100;
    list-style: none;
    user-select: none;
    padding: 15px 12px 5px;
    font-size: 0.925rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
      rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
      rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
    border-radius: 5px;
    background-color: white;
    min-width: 50px;
  }

  ${menuItemSelector.name} {
    cursor: pointer;
    border-radius: 5px;
    margin: 0 0 10px;
    padding: 8px 16px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    background-color: rgba(234, 194, 62, 0.8);
  }

  ${menuItemSelector.hover} {
    color: #fff;
    background-color: rgba(219, 26, 17, 0.8);
  }

  /* ${menuItemSelector.name}.active {
    color: #fff;
    background-color: green;
  } */
  ${menuSelector.name}:focus,${menuItemSelector.name}:focus {
    outline: none;
  }
`;

export const HeaderContainer = styled.div`
  width: 100vw;
  background-color: rgba(255, 255, 255, 0.85);
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 320px;
  margin: 0 auto;
  height: 60px;
  padding: 0 5px;

  @media (min-width: ${size.mobile}) {
    width: 480px;
    padding: 0 15px;
  }
  @media (min-width: ${size.tablet}) {
    width: 768px;
    padding: 0 20px;
  }
  @media (min-width: ${size.desktop}) {
    width: 1280px;
  }
  @media (min-width: ${size.large}) {
    /* width: 1440px; */
  }
`;

export const Logo = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
  /* margin-right: 18px; */
`;

export const NavigationStyled = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 18px;
  &:last-child {
    margin-right: 0;
  }

  @media (min-width: 480px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 1280px) {
  }
`;

export const NavStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  padding: 0 10px;
  font-size: 12px;
  font-weight: 600;
  color: #333;
  text-decoration: none;
  text-transform: uppercase;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: rgba(234, 194, 62, 0.8);
  border-radius: 5px;
  transition: 500ms ease background-color, 500ms ease color;

  &:hover {
    color: white;
    background-color: rgba(219, 26, 17, 0.8);
  }
  &.active {
    color: white;
    background-color: rgba(13, 110, 43, 0.8);
  }

  @media (min-width: 480px) {
    font-size: 14px;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  padding: 0 10px;
  font-size: 12px;
  font-weight: 600;
  color: #333;
  text-decoration: none;
  text-transform: uppercase;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: rgba(234, 194, 62, 0.8);
  border-radius: 5px;
  transition: 500ms ease background-color, 500ms ease color;

  &:hover {
    color: white;
    background-color: rgba(219, 26, 17, 0.8);
  }
  &.active {
    color: white;
    background-color: rgba(13, 110, 43, 0.8);
  }

  @media (min-width: 480px) {
    font-size: 14px;
  }

  @media (min-width: 768) {
    font-size: 16px;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 15px;
  font-size: 12px;
  font-weight: 600;
  color: #333;
  text-decoration: none;
  text-transform: uppercase;
  /* border: 1px solid rgba(0, 0, 0, 0.2); */
  /* background-color: rgba(234, 194, 62, 0.8); */
  background-color: transparent;
  border: 1px solid rgba(219, 26, 17, 0.8);
  border-radius: 5px;
  transition: 500ms ease background-color, 500ms ease color;

  &:hover {
    border-color: rgba(0, 0, 0, 0.2);
    color: white;
    background-color: rgba(219, 26, 17, 0.8);
  }

  @media (min-width: 480px) {
    font-size: 14px;
  }

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const ButtonBurgerStyle = styled(MenuButton)`
  border: 0;
  background-color: transparent;
`;
