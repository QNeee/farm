import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { deleteThrowGame } from "../../redux/cubics/cubicsOperations";
import { getCubicsEndGameResult } from "../../redux/cubics/cubicsSelectors";
import { BalanceContainer, Container } from "../User/Balance";
import { Button } from "../Appbar/AppBar.styled";
import { useLocation } from "react-router-dom";
import { useState } from "react";



const CubicsWinner = () => {
    const dispatch: AppDispatch = useDispatch();
    const { pathname } = useLocation();
    const endGameResult = useSelector(getCubicsEndGameResult);
    const cubicKey = 'cubicId';
    const namePath = pathname.split('/')[1];
    const [w8, setW8] = useState(false);
    const onClickEndGame = async () => {
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
    }
    return <Container><BalanceContainer>{endGameResult.toUpperCase()}
        <Button type="button" onClick={() => onClickEndGame()}>End Game</Button>
    </BalanceContainer>
    </Container>
}

export default CubicsWinner;