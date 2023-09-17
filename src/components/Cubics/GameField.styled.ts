import { FcEmptyTrash, FcManager, FcReddit } from 'react-icons/fc';
import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  padding: 15px;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const GameFieldContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  padding: 20px;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  background-color: #188000;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23185d1f' fill-opacity='1'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");

  /* background-color: rgb(19, 74, 54);
  background: radial-gradient(
    circle farthest-corner at center center,
    rgb(19, 74, 54, 1) 0%,
    rgb(19, 120, 54, 1) 50%
  ); */
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  /* box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset; */

  @media (min-width: 768px) {
    width: 500px;
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
`;

export const TopContainer = styled.div`
  display: flex;
  position: absolute;
  top: 30px;
  left: 30px;
`;

export const BottomContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 30px;
  left: 30px;
`;

export const Square = styled.div`
  width: 40px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  margin-left: 10px;
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
  position: absolute;
  right: 20px;
  top: 50%;
`;

export const UrnImage = styled(FcEmptyTrash)`
  width: 150px;
  height: 150px;
  transform: rotate(-45deg);
  cursor: pointer;
`;

export const Text = styled.p`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 10px;
  border-radius: 5px;
  font-weight: 500;
  text-align: center;
  margin-right: 10px;
`;
