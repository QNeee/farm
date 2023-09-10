import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { AppDispatch } from '../../redux/store';
import { ICubicsData } from '../../types';
import { getStartGame } from '../../redux/cubics/cubicsSelectors';
import {
  deleteThrowGame,
  getCubicInStash,
  postCubicStartGame,
} from '../../redux/cubics/cubicsOperations';
import { useLocation } from 'react-router';
import { nanoid } from '@reduxjs/toolkit';
import { getLanguage } from '../../redux/auth/authSelectors';

const Container = styled.div`
  position: relative;
  width: 300px;
  height: 200px;
  display: flex;
  outline: 2px solid tomato;
  margin-top: 50px;
`;
const CubicsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  padding: 8px 16px;
  margin-left: 100px;
  margin-top: 100px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
const ThrowButton = styled.button`
  position: absolute;
  width: 50px;
  height: 50px;
  right: 0;
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
const Image = styled.img`
  margin-left: 10px;
`;

const ImageContainer = ({ cubicsData }: any) => {
  const cubicKey = 'cubicId';
  const language = useSelector(getLanguage);
  const [w8, setW8] = useState(false);
  const dispatch: AppDispatch = useDispatch();
  const startGame = useSelector(getStartGame);
  const { pathname } = useLocation();
  const namePath = pathname.split('/')[1];
  const onClickStartGame = async () => {
    if (w8) return;
    setW8(true);
    if (namePath === 'demoCubics') {
      const id = localStorage.getItem(cubicKey);
      if (!id) {
        localStorage.setItem(cubicKey, nanoid());
      }
      const newArr = [];
      const data = {
        start: true,
      };
      newArr.push(data);
      newArr.push(localStorage.getItem(cubicKey));
      await dispatch(postCubicStartGame(newArr));
      setW8(false);
    } else {
      const data = {
        start: true,
      };
      await dispatch(postCubicStartGame(data));
      setW8(false);
    }
  };
  const onClickThrowGame = async () => {
    if (w8) return;
    setW8(true);
    if (namePath === 'demoCubics') {
      const id = localStorage.getItem(cubicKey);
      await dispatch(deleteThrowGame(id as string));
      localStorage.removeItem(cubicKey);
    } else {
      await dispatch(deleteThrowGame(''));
    }
    setW8(false);
  };
  const onClickCubic = async (id: string) => {
    if (w8) return;
    setW8(true);
    if (namePath === 'demoCubics') {
      const newArr = [];
      newArr.push(localStorage.getItem(cubicKey));
      newArr.push(id);
      await dispatch(getCubicInStash(newArr as []));
    } else {
      await dispatch(getCubicInStash(id));
    }
    setW8(false);
  };
  return (
    <Container>
      {!startGame ? (
        <Button onClick={onClickStartGame} type="button">
          {language === 'en' ? 'Start' : language === 'ru' ? 'Старт' : 'Старт'}
        </Button>
      ) : (
        <ThrowButton onClick={onClickThrowGame} type="button">
          {language === 'en'
            ? 'Throw'
            : language === 'ru'
            ? 'Здатся'
            : 'Здатися'}
        </ThrowButton>
      )}
      {cubicsData?.map((item: ICubicsData, index: number) => (
        <CubicsContainer key={index}>
          <Image
            onClick={() => onClickCubic(item._id as string)}
            src={item.img}
            alt={index.toString()}
            width="40"
          />
        </CubicsContainer>
      ))}
    </Container>
  );
};

export default ImageContainer;
