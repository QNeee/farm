import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% {
    transform: rotateX(0deg);
  }

  100% {
    transform: rotateX(-1440deg);
  }
`;

export const SlotsContainer = styled.div`
  outline: 5px solid tomato;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80vw;
  height: 40vw;
  transform: translate3d(-50%, -50%, 0);
  perspective: 800vw;
  overflow: hidden;
  background-color: #050505;
  box-shadow: 1vw 1vw 2vw #ff8f8f, -1vw -1vw 2vw #000, -1vw 1vw 2vw #000,
    1vw -1vw 2vw #000;
`;

export const SlotUl = styled.ul<{ animate: boolean }>`
  outline: 5px solid green;
  position: absolute;
  top: 0vw;
  width: 30%;
  height: 20vw;
  margin: 0;
  padding: 0;
  list-style-type: none;
  background-color: rgba(255, 255, 255, 0.1);
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
  left: 35%;
  animation-name: ${({ animate }) => (animate ? rotate : 'none')};
  animation-duration: 6s;

  &:nth-child(1) {
    outline: 5px solid blue;
    left: 3%;
    animation-name: ${({ animate }) => (animate ? rotate : 'none')};
    animation-duration: 5s;
  }

  &:nth-child(2) {
    outline: 5px solid red;
    left: 35%;
    animation-name: ${({ animate }) => (animate ? rotate : 'none')};
    animation-duration: 6s;
  }

  &:nth-child(3) {
    left: 67%;
    animation-name: ${({ animate }) => (animate ? rotate : 'none')};
    animation-duration: 5.4s;
  }
`;

export const SlotLi = styled.li`
  outline: 1px solid red;
  position: absolute;
  top: 10vw;
  right: 0;
  left: 0;
  display: flex;
  height: 20vw;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 0 2vw rgba(0, 0, 0, 0.8),
    inset 0 0 0.5vw rgba(0, 0, 0, 0.5);
  background-color: rgba(204, 193, 163, 0.95);
  transform-origin: 50% 50%;

  &:nth-child(1) {
    transform: rotateX(36deg) translateZ(30vw);
  }

  &:nth-child(2) {
    transform: rotateX(72deg) translateZ(30vw);
  }

  &:nth-child(3) {
    transform: rotateX(108deg) translateZ(30vw);
  }

  &:nth-child(4) {
    transform: rotateX(144deg) translateZ(30vw);
  }

  &:nth-child(5) {
    transform: rotateX(180deg) translateZ(30vw);
  }

  &:nth-child(6) {
    transform: rotateX(216deg) translateZ(30vw);
  }

  &:nth-child(7) {
    transform: rotateX(252deg) translateZ(30vw);
  }

  &:nth-child(8) {
    transform: rotateX(288deg) translateZ(30vw);
  }

  &:nth-child(9) {
    transform: rotateX(324deg) translateZ(30vw);
  }

  &:nth-child(10) {
    transform: rotateX(360deg) translateZ(30vw);
  }
`;
export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 0;
  background: linear-gradient(45deg, white, lightblue);
  position: relative;
  overflow: hidden;
`;

const SlotAnimationNew = keyframes`
  0% {
    transform: rotateY(0deg);
    filter: blur(0);
  }
  100% {
    transform: rotateY(2000deg);
    filter: blur(80px);
  }
`;

const SlotAnimation = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
`;

const SlotAnimationOld = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(720deg);
  } 
`;

export const AnimatedContainer = styled.div<{ animate: boolean; id: string }>`
  position: relative;
  border: 2px solid green;

  border-radius: ${({ animate }) => (animate ? '50%' : 'none')};
  animation-name: ${({ animate, id }) => {
    if (animate) {
      switch (id) {
        case '64a5be6f083fae19e09b4871':
          return SlotAnimation;
        case '64a744f7083fae19e09b4874':
          return SlotAnimationNew;
        case '64a744fd083fae19e09b4875':
          return SlotAnimationOld;
        default:
          return 'none';
      }
    }
  }};
  animation-duration: ${({ animate, id }) => {
    if (animate) {
      switch (id) {
        case '64a5be6f083fae19e09b4871':
          return '0.4s';
        case '64a744f7083fae19e09b4874':
          return '4.3s';
        case '64a744fd083fae19e09b4875':
          return '0.7s';
        default:
          return 'none';
      }
    }
  }};
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  overflow: hidden;
`;

const LineAnimation = keyframes`
   0% {filter: blur(0);
  background-color: blue;}
  10% {filter: blur(0);
  background-color: brown;}
  30% {filter: blur(6px);
    background-color: green;}
  60% {filter: blur(6px);
  background-color: brown;}
  80% {filter: blur(0);
  background-color: green;
  }
`;

export const Line = styled.div<{ line: boolean | string | number }>`
  position: absolute;
  left: ${({ line }) => {
    switch (typeof line) {
      case 'boolean':
        return '50%';
      case 'string':
        return '0';
      case 'number':
        return '45%';
      default:
        break;
    }
  }};
  width: ${({ line }) => {
    switch (typeof line) {
      case 'boolean':
        return '12px';
      case 'string':
        return '100%';
      case 'number':
        return '12px';
      default:
        break;
    }
  }};
  height: ${({ line }) => {
    switch (typeof line) {
      case 'boolean':
        return '100%';
      case 'string':
        return '12px';
      case 'number':
        return '100%';
      default:
        break;
    }
  }};
  background-color: 'blue';
  transform: ${({ line }) => {
    switch (typeof line) {
      case 'boolean':
        return 'translate(-50%, -50%)';
      case 'string':
        return 'none';
      case 'number':
        return 'rotate(-45deg)';
      default:
        break;
    }
  }};
  top: ${({ line }) => {
    switch (typeof line) {
      case 'boolean':
        return '50%';
      case 'string':
        return '45%';
      case 'number':
        return '0';
      default:
        break;
    }
  }};
  animation: ${LineAnimation} 2s linear infinite;
`;
