import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% {
    transform: rotateX(0deg);
  }

  100% {
    transform: rotateX(-1440deg);
  }
`;

export const StyledImageSlot = styled.img`
  width: 67px;
  height: 67px;
`;

export const Wrapper = styled.div`
  width: 280px;

  @media (min-width: 480px) {
    width: 450px;
  }
`;

export const SlotsContainer = styled.div`
  position: relative;
  top: 0;
  left: 50%;
  transform: translate3d(-50%, 0, 0);

  width: 100%;
  height: 260px;

  background-color: silver;
  transition: background-color 3s ease-in 0s;

  /* border: 10px ridge #60716c;
  border-radius: 20px;
  -moz-border-radius: 20px;
  -webkit-border-radius: 20px; */

  perspective: 4500px;
  overflow: hidden;
  &:hover {
    background-color: yellowgreen;
    transition: background-color 3s ease-in 0s;
  }
`;

export const RotaryContainer = styled.ul<{ animate: boolean }>`
  position: absolute;
  top: 75px;
  /* left: 50%; */
  /* transform: translate3d(-50%, -50%, 50%); */

  width: 30%;
  height: 39px;

  background-color: rgba(255, 255, 255, 0.1);
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  animation-timing-function: linear;

  animation-name: ${({ animate }) => (animate ? rotate : 'none')};
  animation-duration: 6s;

  &:nth-child(1) {
    left: 3%;
    animation-name: ${({ animate }) => (animate ? rotate : 'none')};
    animation-duration: 5s;
  }

  &:nth-child(2) {
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
  position: absolute;
  top: 0;
  right: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 92px;
  /* height: 79px; */

  border-width: 0 1px 0 1px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.8);

  box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.8), inset 0 0 2px rgba(0, 0, 0, 1);

  background-color: rgba(204, 193, 163, 1);
  transform-origin: 50% 50%;

  &:nth-child(1) {
    transform: rotateX(36deg) translateZ(140px);
  }

  &:nth-child(2) {
    transform: rotateX(72deg) translateZ(140px);
  }

  &:nth-child(3) {
    transform: rotateX(108deg) translateZ(140px);
  }

  &:nth-child(4) {
    transform: rotateX(144deg) translateZ(140px);
  }

  &:nth-child(5) {
    transform: rotateX(180deg) translateZ(140px);
  }

  &:nth-child(6) {
    transform: rotateX(216deg) translateZ(140px);
  }

  &:nth-child(7) {
    transform: rotateX(252deg) translateZ(140px);
  }

  &:nth-child(8) {
    transform: rotateX(288deg) translateZ(140px);
  }

  &:nth-child(9) {
    transform: rotateX(324deg) translateZ(140px);
  }

  &:nth-child(10) {
    transform: rotateX(360deg) translateZ(140px);
  }
`;
// import styled, { keyframes } from 'styled-components';

// const rotate = keyframes`
//   0% {
//     transform: rotateX(0deg);
//   }

//   100% {
//     transform: rotateX(-1440deg);
//   }
// `;

// export const StyledImageSlot = styled.img`
//   width: 10vw;
//   height: 10vw;
// `;

// export const Wrapper = styled.div`
//   position: relative;

//   @media (max-width: 767px) {
//     height: 200px;
//   }

//   @media (min-width: 768px) and (max-width: 1023px) {
//     height: 300px;
//   }

//   @media (min-width: 1024px) and (max-width: 1280px) {
//     height: 400px;
//   }

//   @media (min-width: 1366px) {
//     height: 500px;
//   }
// `;

// export const SlotsContainer = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate3d(-50%, -50%, 0);
//   border: 1vw ridge #60716c;
//   border-radius: 2vw;
//   -moz-border-radius: 2vw;
//   -webkit-border-radius: 2vw;

//   /* width: 80vw;
//   height: 40vw; */
//   /* perspective: 800vw; */

//   width: 48vw;
//   height: 30vw;
//   perspective: 320vw;

//   overflow: hidden;
//   background-color: black;
// `;

// export const RotaryContainer = styled.ul<{ animate: boolean }>`
//   position: absolute;

//   /* top: 0vw; */
//   /* width: 30%;
//   height: 20vw; */

//   top: 2.9vw;
//   width: 30%;
//   height: 12vw;

//   margin: 0;
//   padding: 0;
//   list-style-type: none;
//   background-color: rgba(255, 255, 255, 0.1);
//   transform-style: preserve-3d;
//   transform-origin: 50% 100%;
//   animation-timing-function: linear;
//   animation-iteration-count: infinite;
//   animation-fill-mode: both;
//   left: 35%;
//   animation-name: ${({ animate }) => (animate ? rotate : 'none')};
//   animation-duration: 6s;

//   &:nth-child(1) {
//     left: 3%;
//     animation-name: ${({ animate }) => (animate ? rotate : 'none')};
//     animation-duration: 5s;
//   }

//   &:nth-child(2) {
//     left: 35%;
//     animation-name: ${({ animate }) => (animate ? rotate : 'none')};
//     animation-duration: 6s;
//   }

//   &:nth-child(3) {
//     left: 67%;
//     animation-name: ${({ animate }) => (animate ? rotate : 'none')};
//     animation-duration: 5.4s;
//   }
// `;

// export const SlotLi = styled.li`
//   position: absolute;
//   right: 0;
//   left: 0;
//   display: flex;
//   border-width: 0 0.3vw 0 0.3vw;
//   border-style: solid;
//   border-color: rgba(0, 0, 0, 0.8);

//   /* top: 10vw;
//   height: 20vw; */

//   top: 6vw;
//   height: 12vw;

//   justify-content: center;
//   align-items: center;
//   box-shadow: inset 0 0 0.8vw rgba(0, 0, 0, 0.8),
//     inset 0 0 0.2vw rgba(0, 0, 0, 1);
//   background-color: rgba(204, 193, 163, 0.95);
//   transform-origin: 50% 50%;

//   &:nth-child(1) {
//     transform: rotateX(36deg) translateZ(18vw);
//   }

//   &:nth-child(2) {
//     transform: rotateX(72deg) translateZ(18vw);
//   }

//   &:nth-child(3) {
//     transform: rotateX(108deg) translateZ(18vw);
//   }

//   &:nth-child(4) {
//     transform: rotateX(144deg) translateZ(18vw);
//   }

//   &:nth-child(5) {
//     transform: rotateX(180deg) translateZ(18vw);
//   }

//   &:nth-child(6) {
//     transform: rotateX(216deg) translateZ(18vw);
//   }

//   &:nth-child(7) {
//     transform: rotateX(252deg) translateZ(18vw);
//   }

//   &:nth-child(8) {
//     transform: rotateX(288deg) translateZ(18vw);
//   }

//   &:nth-child(9) {
//     transform: rotateX(324deg) translateZ(18vw);
//   }

//   &:nth-child(10) {
//     transform: rotateX(360deg) translateZ(18vw);
//   }
// `;
