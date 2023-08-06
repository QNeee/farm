import styled from 'styled-components';
import { size } from '../../utils/breakpoint';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  /* overflow-y: auto; */

  @media (min-width: ${size.mobile}) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 50px 0;
    border-radius: 5px;

    box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;

    background-color: rgba(255, 255, 255, 0.5);
    background-image: url("data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm33.414-6l5.95-5.95L45.95.636 40 6.586 34.05.636 32.636 2.05 38.586 8l-5.95 5.95 1.414 1.414L40 9.414l5.95 5.95 1.414-1.414L41.414 8zM40 48c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zM9.414 40l5.95-5.95-1.414-1.414L8 38.586l-5.95-5.95L.636 34.05 6.586 40l-5.95 5.95 1.414 1.414L8 41.414l5.95 5.95 1.414-1.414L9.414 40z' fill='%23daf12d' fill-opacity='0.13' fill-rule='evenodd'/%3E%3C/svg%3E");
  }
  @media (min-width: ${size.desktop}) {
    justify-content: space-between;
    padding: 10px 300px;
    /* width: 768px; */
  }
`;

export const Item = styled.li`
  display: flex;
  position: relative;
  width: 100%;
  height: 200px;
  margin: 10px;
  padding: 30px;
  border-radius: 5px;
  border: 1px solid #c6c6;
  background-color: rgba(255, 255, 255, 0.85);
  box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;

  cursor: pointer;
  z-index: 1;

  @media (min-width: ${size.mobile}) {
    padding: 20px;
    width: 320px;
  }

  @media (min-width: ${size.tablet}) {
    align-items: center;
    width: 230px;
    height: 230px;
    padding: 30px;
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
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  width: 100%;
`;
