import styled from "styled-components";
import { Button, Input, Modal } from "../Appbar/AppBar.styled";
import { useDispatch, useSelector } from "react-redux";
import { getUserBalance } from "../../redux/auth/authSelectors";
import { useState } from "react";
import { AppDispatch } from "../../redux/store";
import { postUserBalance } from "../../redux/auth/authOperations";


const Container = styled.div`
color:white;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
const BalanceContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-top:30px;
padding-bottom:30px;
outline: 1px solid tomato;
margin-top:30px;
margin-bottom: 100px;
`;
const Balance = () => {
    const dispatch: AppDispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const useBalance = useSelector(getUserBalance);
    const [balance, setBalance] = useState('');
    const handleBalanceSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const reqBody = {
            balance: balance,
        };
        await dispatch(postUserBalance(reqBody));
        setBalance('');
        setShowModal(false);
    };
    const onClickExit = () => {
        setShowModal(false);
    };
    return <Container>
        <BalanceContainer>
            Ваш Баланс
            <div>
                {useBalance}
            </div>
        </BalanceContainer>
        <Button type="button" onClick={() => setShowModal(true)}>Поповнити</Button>
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
    </Container>
}


export default Balance;