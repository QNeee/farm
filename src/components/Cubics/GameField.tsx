import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Table from './Table';
import ImageContainer from './ImageContainer';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { ICubicsData } from '../../types';
import { getCubicInStashArr, getCubics, getCubicsRolls, getStartGame } from '../../redux/cubics/cubicsSelectors';
import { getCubicOutStash, getCubicsReroll, getCubicsStartGame } from '../../redux/cubics/cubicsOperations';
import { useLocation } from 'react-router';
import { getLanguage } from '../../redux/auth/authSelectors';
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
  const [w8, setW8] = useState(false);
  const language = useSelector(getLanguage);
  const cubicKey = 'cubicId'
  const startGame = useSelector(getStartGame);
  const dispatch: AppDispatch = useDispatch();
  const cubicsData = useSelector(getCubics);
  const rolls = useSelector(getCubicsRolls);
  const cubicInStash = useSelector(getCubicInStashArr);
  const { pathname } = useLocation();
  const namePath = pathname.split('/')[1];
  const onClickStartGame = async () => {
    if (w8) return;
    if (!startGame) return;
    if (rolls === 0) return;
    setW8(true);
    if (rolls !== null && rolls > 0 && rolls < 3) {
      if (namePath === 'demoCubics') {
        await dispatch(getCubicsReroll(localStorage.getItem(cubicKey) as string));
        return setW8(false);
      } else {
        await dispatch(getCubicsReroll(''));
        return setW8(false);
      }

    }
    if (namePath === 'demoCubics') {
      await dispatch(getCubicsStartGame(localStorage.getItem(cubicKey) as string));
    } else {
      await dispatch(getCubicsStartGame(''));
    }
    setW8(false);
  }
  const onClickCubic = async (id: string | undefined) => {
    if (!id) return;
    if (w8) return;
    setW8(true);
    if (namePath === 'demoCubics') {
      const newArr = [];
      newArr.push(localStorage.getItem(cubicKey));
      newArr.push(id);
      await dispatch(getCubicOutStash(newArr as []));
    } else {
      await dispatch(getCubicOutStash(id as string));
    }
    setW8(false);
  }
  const rollsNumber = () => {
    switch (language) {
      case 'ukr':
        return ' залишилось'
      case 'ru':
        return ' осталось'
      default:
        return ' left'
    }
  }
  return (
    <MainContainer>
      <GameFieldContainer>
        <TopContainer>
          <Image src="https://klike.net/uploads/posts/2019-03/1551511823_2.jpg" alt="dd" width='60' />
        </TopContainer>
        <ImageContainer cubicsData={cubicsData} />
        <BottomContainer>
          <Image src="https://klike.net/uploads/posts/2019-03/1551511823_2.jpg" alt="dd" width='60' />
          <Square onClick={() => onClickCubic(cubicInStash && cubicInStash[0]?._id ? cubicInStash[0]?._id as string : undefined)}><img src={cubicInStash && cubicInStash[0]?.img && cubicInStash[0]?.img as string} width='40'></img></Square>
          <Square onClick={() => onClickCubic(cubicInStash && cubicInStash[1]?._id ? cubicInStash[1]?._id as string : undefined)}><img src={cubicInStash && cubicInStash[1]?.img && cubicInStash[1]?.img as string} width='40'></img></Square>
          <Square onClick={() => onClickCubic(cubicInStash && cubicInStash[2]?._id ? cubicInStash[2]?._id as string : undefined)}><img src={cubicInStash && cubicInStash[2]?.img && cubicInStash[2]?.img as string} width='40'></img></Square>
          <Square onClick={() => onClickCubic(cubicInStash && cubicInStash[3]?._id ? cubicInStash[3]?._id as string : undefined)}><img src={cubicInStash && cubicInStash[3]?.img && cubicInStash[3]?.img as string} width='40'></img></Square>
          <Square onClick={() => onClickCubic(cubicInStash && cubicInStash[4]?._id ? cubicInStash[4]?._id as string : undefined)}><img src={cubicInStash && cubicInStash[4]?.img && cubicInStash[4]?.img as string} width='40'></img></Square>
        </BottomContainer>
        <UrnContainer>
          <P>{language === 'en' ? 'Rolls' : language === 'ru' ? 'Крутить' : 'Розкочувати'} {rolls !== null && rolls >= 0 ? rolls + rollsNumber() : null}</P>
          <UrnImage onClick={onClickStartGame} src="https://www.sab.kh.ua/wp-content/uploads/2020/06/435346456456.jpg" alt="" width='50' />
        </UrnContainer>
      </GameFieldContainer>
      <Table />
    </MainContainer>
  );
};

export default GameField;