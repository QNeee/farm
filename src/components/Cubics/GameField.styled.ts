import { IconButton } from '@mui/material';
import { FcEmptyTrash, FcManager, FcReddit, FcRightDown } from 'react-icons/fc';
import styled, { keyframes } from 'styled-components';

const shakeAnimation = keyframes`
  0%,
  100% {
    transform: rotate(-45deg);
    transform-origin: 50% 50%;
  }
  10% {
    transform: rotate(8deg);
  }
  20%,
  40%,
  60% {
    transform: rotate(-10deg);
  }
  30%,
  50%,
  70% {
    transform: rotate(10deg);
  }
  80% {
    transform: rotate(-8deg);
  }
  90% {
    transform: rotate(8deg);
  }
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.5);

  @media (min-width: 768px) {
    padding: 11px;
    border-radius: 5px 0 0 5px;
  }
  @media (min-width: 1280px) {
    padding: 15px;
    border-radius: 10px;
  }
`;

export const GameFieldContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  padding: 20px;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  background-color: #188000;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 10px;

  @media (min-width: 480px) {
    width: 450px;
    height: 450px;
  }
  @media (min-width: 768px) {
    width: 400px;
    height: 400px;
  }

  @media (min-width: 1280px) {
    width: 500px;
    height: 500px;
  }
`;

export const Wrapper = styled.div`
  padding: 10px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  height: 100%;
  width: 100%;
  border-radius: 10px;
  display: flex;
  align-items: center;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23185d1f' fill-opacity='1'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  top: 30px;
  right: 0;
  padding: 0 70px 0 25px;

  @media (min-width: 768px) {
    padding-right: 40px;
  }
  @media (min-width: 1280px) {
    padding-left: 30px;
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 30px;
  left: 24px;

  @media (min-width: 1280px) {
    left: 30px;
  }
`;

export const Square = styled.div`
  width: 40px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  margin-left: 2px;

  @media (min-width: 1280px) {
    margin-left: 10px;
  }
`;

export const ImageUser = styled(FcManager)`
  width: 40px;
  height: 40px;
  padding: 5px;
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
`;

export const ImagePc = styled(FcReddit)`
  width: 40px;
  height: 40px;
  padding: 5px;
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
`;

export const UrnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 15%;
  right: 23px;
  @media (min-width: 480px) {
    top: 26%;
    right: 30px;
  }
  @media (min-width: 768px) {
    top: 22%;
    right: 10px;
  }

  @media (min-width: 1280px) {
    top: 50%;
    right: 20px;
  }
`;

export const UrnImage = styled(FcEmptyTrash)`
  width: 30px;
  height: 30px;
  transform: rotate(-45deg);
  cursor: pointer;
  animation: ${shakeAnimation} 1.5s infinite;
  animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
  animation-iteration-count: infinite;
  animation-play-state: paused;
  &:hover {
    animation-play-state: running;
  }
  @media (min-width: 480px) {
    width: 70px;
    height: 70px;
  }

  @media (min-width: 1280px) {
    width: 150px;
    height: 150px;
  }
`;

export const Text = styled.p`
  background-color: rgba(255, 255, 255, 0.8);
  color: rgba(0, 0, 0, 1);
  padding: 3px;
  border-radius: 5px;
  font-size: 11px;
  font-weight: 500;
  text-align: center;

  @media (min-width: 480px) {
    padding: 6px;
    font-size: 14px;
  }

  @media (min-width: 768px) {
    padding: 2px;
    font-weight: 600;
    text-align: center;
    margin-right: 10px;
  }

  @media (min-width: 1280px) {
    padding: 10px;
    font-size: 16px;
  }
`;

export const PointerAngle = styled(FcRightDown)`
  width: 10px;
  height: 10px;
  transform: rotate(45deg);

  @media (min-width: 480px) {
    width: 20px;
    height: 20px;
  }
  @media (min-width: 768px) {
    width: 25px;
    height: 25px;
  }
`;
