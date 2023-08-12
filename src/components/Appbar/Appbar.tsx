import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Lottie from 'lottie-react';

import {
  UserContainer,
  UserInfo,
  UserEmail,
  Modal,
  Input,
  Button,
} from './AppBar.styled';
import { AppDispatch } from '../../redux/store';
import { getRefreshed, getUserEmail } from '../../redux/auth/authSelectors';
import { getUserInfo, postUserBalance } from '../../redux/auth/authOperations';
import attentionArrow from '../../utils/attention.json';

const AppBar: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const userEmail = useSelector(getUserEmail);
  const refreshed = useSelector(getRefreshed);

  const [showModal, setShowModal] = useState(false);
  const [balance, setBalance] = useState('');

  const handleContainerClick = () => {
    setShowModal(true);
  };

  const onClickExit = () => {
    setShowModal(false);
  };
  useEffect(() => {
    if (refreshed) dispatch(getUserInfo());
  }, [dispatch, refreshed]);

  const handleBalanceSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const reqBody = {
      balance: balance,
    };
    dispatch(postUserBalance(reqBody));
    setShowModal(false);
  };

  return (
    <>
      <UserContainer onClick={handleContainerClick}>
        {/* <Lottie
          style={{
            height: 24,
            width: 24,
            marginBottom: '-13px',
            marginRight: '3px',
          }}
          animationData={attentionArrow}
        /> */}
        <UserInfo>
          <UserEmail>{userEmail}</UserEmail>
        </UserInfo>
      </UserContainer>
      {showModal && (
        <Modal>
          <h2>Поповнити баланс</h2>
          <Input
            type="text"
            value={balance}
            onChange={(e) => setBalance(e.target.value)}
            placeholder="Введіть суму"
          />
          <Button onClick={handleBalanceSubmit}>ОК</Button>
          <Button onClick={onClickExit}>Exit</Button>
        </Modal>
      )}
    </>
  );
};

export default AppBar;
