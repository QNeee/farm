import styled, { keyframes } from 'styled-components';
// import Machine from '../../images/machine.png';

export const Background = styled.div`
  width: 100%;
  height: 700px;
  background-image: url('../../images/machine.png');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const strokeAnimation = keyframes`
  0% {
    fill: rgba(27, 204, 47, 0);
    stroke: rgba(160, 18, 53, 1);
    stroke-dashoffset: 25%;
    stroke-dasharray: 0 50%;
    stroke-width: 5;
  }
  70% {
    fill: rgba(27, 204, 47, 0);
    stroke: rgba(160, 18, 53, 1);
  }
  80% {
    fill: rgba(27, 204, 47, 0);
    stroke: rgba(160, 18, 53, 1);
    stroke-width: 5;
  }
  100% {
    fill: rgba(27, 204, 47, 1);
    stroke: rgba(160, 18, 53, 0);
    stroke-dashoffset: -25%;
    stroke-dasharray: 50% 0;
    stroke-width: 10;
  }
`;

export const StyledSvg = styled.svg`
  font-family: 'Montserrat Variable', sans-serif;
  width: 100%;
  height: 80px;
`;

export const StyledText = styled.text`
  animation: ${strokeAnimation} 2s infinite alternate;
  stroke-width: 5;
  stroke: #a01235;
  font-size: 4.6em;
`;
