import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getUserEmail } from '../../Redux/chatSlice';
import { AppDispatch } from "../../Redux/store";
import { getUserInfo, postUserBalance } from "../../Redux/userOperations";

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserEmail = styled.p`
  margin: 0;
  font-size: 14px;
  color: #666;
`;

const Modal = styled.div`
z-index: 2;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  margin-bottom: 16px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const AppBar: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [balance, setBalance] = useState('');
    const userEmail = useSelector(getUserEmail);
    const dispatch: AppDispatch = useDispatch();
    const handleContainerClick = () => {
        setShowModal(true);
    };
    useEffect(() => {
        dispatch(getUserInfo());
    }, [dispatch])
    const handleBalanceSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const reqBody = {
            balance: balance
        }
        dispatch(postUserBalance(reqBody))
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
                    <button type="button">Exit</button>
                </Modal>
            )}
        </>
    );
};

export default AppBar;
