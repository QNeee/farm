import styled, { keyframes } from 'styled-components';

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
  border-width: 0 1px 0 1px;
  border-style: solid;
  border-color: #333;
  box-shadow: 0px 0px 10px 1px #333 inset;
  padding: 8px;

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
  /* animation-timing-function: cubic-bezier(0.6, 1, 0.7, 0); */
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  animation-iteration-count: 3;
  overflow: hidden;
`;

const LineAnimation = keyframes`
   /* 0% {filter: blur(0);
  background-color: blue;}
  10% {filter: blur(0);
  background-color: brown;}
  30% {filter: blur(6px);
    background-color: green;}
  60% {filter: blur(6px);
  background-color: brown;} */
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
        return '50%'
      default:
        break;
    }
  }};
  width: ${({ line }) => {
    switch (typeof line) {
      case 'boolean':
        return '6px';
      case 'string':
        return '100%';
      case 'number':
        return '6px';
      default:
        break;
    }
  }};
  height: ${({ line }) => {
    switch (typeof line) {
      case 'boolean':
        return '100%';
      case 'string':
        return '6px';
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
        return line === 1 ? 'rotate(-45deg)' : 'rotate(45deg)';
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
