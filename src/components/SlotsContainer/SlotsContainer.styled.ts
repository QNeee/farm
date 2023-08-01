import styled from 'styled-components';
import { size } from '../../utils/breakpoint';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (min-width: ${size.tablet}) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`;

export const Item = styled.li`
  display: flex;
  position: relative;

  width: 100%;
  height: 200px;
  margin: 10px;
  padding: 10px;

  border: 1px solid #333;
  border-radius: 5px;

  background-color: rgba(255, 255, 0, 0.2);
  cursor: pointer;

  @media (min-width: ${size.mobile}) {
    height: 250px;
  }

  @media (min-width: ${size.tablet}) {
    align-items: center;
    width: 230px;
    height: 230px;
  }
`;

export const Bullet = styled.span`
  /* display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #333;
  margin-bottom: 10px; */
`;

export const Text = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 2px 10px;
  color: white;
  background-color: rgba(0, 0, 255, 0.5);
  font-size: 16px;

  border-radius: 20px;
  pointer-events: none;
  z-index: 1;
`;

export const Image = styled.img`
  border-radius: 5px;
`;
