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
  box-shadow: 1vw 1vw 2vw #ff8f8f, -1vw -1vw 2vw #000, -1vw 1vw 2vw #000, 1vw -1vw 2vw #000;
`;

export const Slot = styled.ul`
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
  animation-name: ${rotate};
  animation-duration: 6s;

  &:nth-child(1) {
    outline: 5px solid blue;
    left: 3%;
    animation-name: ${rotate};
    animation-duration: 5s;
  }

  &:nth-child(2) {
    outline: 5px solid red;
    left: 35%;
    animation-name: ${rotate};
    animation-duration: 6s;
  }

  &:nth-child(3) {
    left: 67%;
    animation-name: ${rotate};
    animation-duration: 5.4s;
  }
`;

export const Pic = styled.div`
  outline: 1px solid red;
  position: absolute;
  top: 10vw;
  right: 0;
  left: 0;
  display: flex;
  height: 20vw;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 0 2vw rgba(0, 0, 0, 0.8), inset 0 0 0.5vw rgba(0, 0, 0, 0.5);
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