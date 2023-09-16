import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Table from './Table';
import ImageContainer from './ImageContainer';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { ICubicsData } from '../../types';
import {
  getCubicInStashArr,
  getCubics,
  getCubicsRolls,
  getStartGame,
} from '../../redux/cubics/cubicsSelectors';
import {
  getCubicOutStash,
  getCubicsReroll,
  getCubicsStartGame,
} from '../../redux/cubics/cubicsOperations';
import { useLocation } from 'react-router';
import { getLanguage } from '../../redux/auth/authSelectors';
import { Lamp } from '../SlotApp/SlotApp.styled';
import { TextModal } from '../Modal';
import { FcIdea } from 'react-icons/fc';
import {
  BottomContainer,
  GameFieldContainer,
  Image,
  MainContainer,
  Square,
  Text,
  TopContainer,
  UrnContainer,
  UrnImage,
} from './GameField.styled';

const GameField: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen((prev) => !prev);
  const [w8, setW8] = useState(false);
  const language = useSelector(getLanguage);
  const cubicKey = 'cubicId';
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
        await dispatch(
          getCubicsReroll(localStorage.getItem(cubicKey) as string)
        );
        return setW8(false);
      } else {
        await dispatch(getCubicsReroll(''));
        return setW8(false);
      }
    }
    if (namePath === 'demoCubics') {
      await dispatch(
        getCubicsStartGame(localStorage.getItem(cubicKey) as string)
      );
    } else {
      await dispatch(getCubicsStartGame(''));
    }
    setW8(false);
  };
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
  };
  const rollsNumber = () => {
    switch (language) {
      case 'ukr':
        return ' залишилось';
      case 'ru':
        return ' осталось';
      default:
        return ' left';
    }
  };
  return (
    <MainContainer>
      <GameFieldContainer>
        <TopContainer>
          <Image
            src="https://klike.net/uploads/posts/2019-03/1551511823_2.jpg"
            alt="dd"
            width="60"
          />
        </TopContainer>
        <ImageContainer cubicsData={cubicsData} />
        <BottomContainer>
          <Image
            src="https://klike.net/uploads/posts/2019-03/1551511823_2.jpg"
            alt="dd"
            width="60"
          />
          <Square
            onClick={() =>
              onClickCubic(
                cubicInStash && cubicInStash[0]?._id
                  ? (cubicInStash[0]?._id as string)
                  : undefined
              )
            }
          >
            <img
              src={
                cubicInStash &&
                cubicInStash[0]?.img &&
                (cubicInStash[0]?.img as string)
              }
              width="40"
            ></img>
          </Square>
          <Square
            onClick={() =>
              onClickCubic(
                cubicInStash && cubicInStash[1]?._id
                  ? (cubicInStash[1]?._id as string)
                  : undefined
              )
            }
          >
            <img
              src={
                cubicInStash &&
                cubicInStash[1]?.img &&
                (cubicInStash[1]?.img as string)
              }
              width="40"
            ></img>
          </Square>
          <Square
            onClick={() =>
              onClickCubic(
                cubicInStash && cubicInStash[2]?._id
                  ? (cubicInStash[2]?._id as string)
                  : undefined
              )
            }
          >
            <img
              src={
                cubicInStash &&
                cubicInStash[2]?.img &&
                (cubicInStash[2]?.img as string)
              }
              width="40"
            ></img>
          </Square>
          <Square
            onClick={() =>
              onClickCubic(
                cubicInStash && cubicInStash[3]?._id
                  ? (cubicInStash[3]?._id as string)
                  : undefined
              )
            }
          >
            <img
              src={
                cubicInStash &&
                cubicInStash[3]?.img &&
                (cubicInStash[3]?.img as string)
              }
              width="40"
            ></img>
          </Square>
          <Square
            onClick={() =>
              onClickCubic(
                cubicInStash && cubicInStash[4]?._id
                  ? (cubicInStash[4]?._id as string)
                  : undefined
              )
            }
          >
            <img
              src={
                cubicInStash &&
                cubicInStash[4]?.img &&
                (cubicInStash[4]?.img as string)
              }
              width="40"
            ></img>
          </Square>
        </BottomContainer>
        <UrnContainer>
          <Text>
            {language === 'en'
              ? 'Rolls'
              : language === 'ru'
              ? 'Крутить'
              : 'Розкочувати'}{' '}
            {rolls !== null && rolls >= 0 ? rolls + rollsNumber() : null}
          </Text>
          <UrnImage
            onClick={onClickStartGame}
            src="https://www.sab.kh.ua/wp-content/uploads/2020/06/435346456456.jpg"
            alt=""
            width="50"
          />
        </UrnContainer>
        <Lamp>
          {isOpen && (
            <TextModal
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}
            ></TextModal>
          )}
          <FcIdea
            onClick={toggleModal}
            title="Інструкції"
            style={{ height: 32, width: 32 }}
          />
        </Lamp>
      </GameFieldContainer>
      {/* <Table /> */}
    </MainContainer>
  );
};

export default GameField;
