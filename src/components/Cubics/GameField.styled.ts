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
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  background-color: green;
  width: 300px;
  height: 500px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  padding: 20px;

  @media (min-width: 768px) {
    width: 500px;
  }

  @media (min-width: 1280px) {
    width: 500px;
  }
`;

export const TopContainer = styled.div`
  display: flex;
`;

export const BottomContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  margin-bottom: 15px;
`;

export const Square = styled.div`
  width: 40px;
  height: 40px;
  background-color: transparent;
  border: 1px solid black;
  border-radius: 5px;
  margin-left: 10px;
  margin-right: 10px;
`;

export const Image = styled.img`
  margin-left: -20px;
`;

export const UrnContainer = styled.div`
  position: absolute;
  right: 20px;
  top: 50%;
`;

export const UrnImage = styled.img`
  cursor: pointer;
  border: 1px solid black;
`;

export const Text = styled.p`
  background-color: white;
`;
