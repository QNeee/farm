import React, { useState } from 'react';
import styled from 'styled-components';
import Table from './Table';
import ImageContainer from './ImageContainer';
import { useDispatch, useSelector } from 'react-redux';
import { getCubics, getStartGame } from '../../redux/chatSlice';
import { AppDispatch } from '../../redux/store';
import { getCubicsStartGame } from '../../redux/cubicsOperations';
import { ICubicsData } from '../../types';
const GameFieldContainer = styled.div`
position: relative;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  background-color: green;
  width: 300px;
  height: 400px;
  border: 5px solid black;
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  padding: 20px;

  @media (min-width: 768px) {
    width: 500px;
  }

  @media (min-width: 1280px) {
    width: 800px;
  }
`;
const TopContainer = styled.div`
display: flex;
`
  ;
const BottomContainer = styled.div`
display: flex;
position: absolute;
bottom: 0;
margin-bottom: 15px;
`;
const MainContainer = styled.div`
display: flex;
`;
const Square = styled.div`
  width: 40px;
  height: 40px;
  background-color: transparent;
  border: 1px solid black;
  border-radius:5px;
  margin-left: 10px;
  margin-right: 10px;
`;
const Image = styled.img`
margin-left:-20px;
`;
const UrnContainer = styled.div`
position: absolute;
right: 20px;
top:50%;
`;
const UrnImage = styled.img`
cursor: pointer;
border:1px solid black;
`;
const P = styled.p`
background-color: white;
`;
const GameField: React.FC = () => {
  const startGame = useSelector(getStartGame);
  const dispatch: AppDispatch = useDispatch();
  const cubicsData = useSelector(getCubics);
  const onClickStartGame = () => {
    if (!startGame) return;
    dispatch(getCubicsStartGame());
  }
  return (
    <MainContainer>
      <GameFieldContainer>
        <TopContainer>
          <Image src="https://klike.net/uploads/posts/2019-03/1551511823_2.jpg" alt="dd" width='60' />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
        </TopContainer>
        <ImageContainer cubicsData={cubicsData} />
        <BottomContainer>
          <Image src="https://klike.net/uploads/posts/2019-03/1551511823_2.jpg" alt="dd" width='60' />
          <Square />
          <Square />
          <Square />
          <Square />
          <Square />
        </BottomContainer>
        <UrnContainer>
          <P>Roll</P>
          <UrnImage onClick={onClickStartGame} src="https://www.sab.kh.ua/wp-content/uploads/2020/06/435346456456.jpg" alt="" width='50' />
        </UrnContainer>
      </GameFieldContainer>
      <Table />
    </MainContainer>
  );
};

export default GameField;