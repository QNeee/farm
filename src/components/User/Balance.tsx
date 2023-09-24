import styled from 'styled-components';
import { Button, Input, Modal } from '../Appbar/AppBar.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getLanguage, getUserBalance } from '../../redux/auth/authSelectors';
import { useState } from 'react';
import { AppDispatch } from '../../redux/store';
import { postUserBalance } from '../../redux/auth/authOperations';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;
export const BalanceContainer = styled.div`
  width: 300px;
  height: 150px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.5);
  font-weight: 700;
  color: rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding-top: 50px;
  padding-bottom: 50px;
  /* outline: 1px solid tomato; */
  margin-top: 30px;
  margin-bottom: 100px;
`;
const ModalWrapper = styled.div`
display: flex;
flex-direction: column;
height: 200px;
justify-content: space-around;
`;
const Balance = () => {
  const dispatch: AppDispatch = useDispatch();
  const language = useSelector(getLanguage);
  const [showModal, setShowModal] = useState(false);
  const useBalance = useSelector(getUserBalance);
  const [balance, setBalance] = useState('');
  const handleBalanceSubmit = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    if (!balance) return;
    const reqBody = {
      balance: balance,
    };
    await dispatch(postUserBalance(reqBody));
    setBalance('');
    setShowModal(false);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (/^[+]?\d*\.?\d*$/.test(inputValue)) {
      setBalance(inputValue);
    }
  };
  const onClickExit = () => {
    setShowModal(false);
  };
  return (
    <Container>
      <BalanceContainer>
        <h2>{language === 'en' ? 'Your Balance:' : language === 'ru' ? 'Ваш Баланс:' : 'Ваш Баланс:'}</h2>
        <div>{useBalance}</div>
      </BalanceContainer>
      <Button type="button" onClick={() => setShowModal(true)}>
        {language === 'en' ? 'Top up' : language === 'ru' ? 'Пополнить' : 'Поповнити'}
      </Button>
      {showModal && (
        <Modal>
          <h2>{language === 'en' ? 'Top up balance' : language === 'ru' ? 'Пополнить баланс' : 'Поповнити баланс'}</h2>
          <ModalWrapper>
            <Input
              type="number"
              value={balance}
              onChange={handleInputChange}
              placeholder={language === 'en' ? 'enter sum' : language === 'ru' ? 'введите суму' : 'введіть суму'}
            />
            <Button onClick={handleBalanceSubmit}>OK</Button>
            <Button onClick={onClickExit}>{language === 'en' ? 'Close' : language === 'ru' ? 'Закрыть' : 'Закрити'}</Button>
          </ModalWrapper>
        </Modal>
      )}
    </Container>
  );
};

export default Balance;
