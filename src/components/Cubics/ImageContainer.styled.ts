import { BsFillHandIndexThumbFill } from 'react-icons/bs';
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 225px;
  border-radius: 10px;

  @media (min-width: 1280px) {
    height: 300px;
  }
`;

export const CubicsContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: nowrap;
  width: 35px;
  margin: 2px;
  @media (min-width: 480px) {
    width: 100%;
    margin: auto;
  }
`;

export const Button = styled.button`
  padding: 16px;
  background-color: rgba(0, 0, 0, 0.5);
  color: rgba(255, 255, 255, 1);
  font-weight: 600;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  cursor: pointer;
`;

export const ThrowButton = styled.button`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 16px;
  background-color: rgba(0, 0, 0, 0.5);
  color: rgba(255, 255, 255, 1);
  font-weight: 600;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  cursor: pointer;
`;

export const PointerDown = styled(BsFillHandIndexThumbFill)`
  transform: rotate(180deg);
`;

export const PointerUp = styled(BsFillHandIndexThumbFill)`
  margin: 0;
`;

export const Image = styled.img`
  margin-right: 10px;
`;
