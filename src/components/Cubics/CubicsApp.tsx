import { useEffect } from 'react';
import GameField from './GameField';
import { AppDispatch } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { getRefreshed } from '../../redux/auth/authSelectors';
import { getCubicsStart } from '../../redux/cubics/cubicsOperations';
import { useLocation } from 'react-router';
import { nanoid } from '@reduxjs/toolkit';
import { getCubicsEndGame } from '../../redux/cubics/cubicsSelectors';
import CubicsWinner from '../Modal/CubicsWinner';
import { Container } from './Cubics.styled';
import Table from './Table';

const CubicsApp = () => {
  const cubicKey = 'cubicId';
  const dispatch: AppDispatch = useDispatch();
  const refreshed = useSelector(getRefreshed);
  const { pathname } = useLocation();
  const namePath = pathname.split('/')[1];
  const endGame = useSelector(getCubicsEndGame);
  useEffect(() => {
    if (refreshed || namePath === 'demoCubics')
      if (namePath === 'demoCubics') {
        const id = localStorage.getItem(cubicKey);
        if (!id) {
          localStorage.setItem(cubicKey, nanoid());
        }
        dispatch(getCubicsStart(localStorage.getItem(cubicKey) as string));
      } else {
        dispatch(getCubicsStart(''));
      }
  }, [dispatch, refreshed, namePath]);
  return (
    <Container>
      {!endGame ? <GameField /> : <CubicsWinner />}
      <Table />
    </Container>
  );
};

export default CubicsApp;
