import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Modal from 'react-modal';
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
  ImagePc,
  ImageUser,
  MainContainer,
  PointerAngle,
  Square,
  Text,
  TopContainer,
  UrnContainer,
  UrnImage,
  Wrapper,
} from './GameField.styled';
import { LuBeaker, LuDices } from 'react-icons/lu';
import { Checkbox, IconButton } from '@mui/material';

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

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

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
        <Wrapper>
          <TopContainer>
            <ImagePc />
            <Lamp>
              <FcIdea
                onClick={openModal}
                title="Інструкції"
                style={{ height: 32, width: 32 }}
              />
              <Modal
                appElement={document.getElementById('root') || undefined}
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Інструкції"
              >
                <TextModal onClose={closeModal} />
              </Modal>
            </Lamp>
          </TopContainer>
          <ImageContainer cubicsData={cubicsData} />
          <BottomContainer>
            <ImageUser />
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
                ? 'Кинуть кости'
                : 'Кинути кістки'}{' '}
              <br />
              {rolls !== null && rolls >= 0 ? rolls + rollsNumber() : null}
              <br />
              <PointerAngle />
            </Text>
            <UrnImage onClick={onClickStartGame} />
          </UrnContainer>
        </Wrapper>
      </GameFieldContainer>
    </MainContainer>
  );
};

export default GameField;
