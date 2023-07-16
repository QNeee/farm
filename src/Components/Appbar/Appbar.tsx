import { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo, postUserBalance } from '../../Redux/userOperations';

import {
  UserContainer,
  UserInfo,
  UserEmail,
  Modal,
  Input,
  Button,
} from './AppBar.styled';
import { AppDispatch } from '../../Redux/store';
import { getRefreshed, getUserEmail } from '../../Redux/chatSlice';

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
