import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { deleteThrowGame } from "../../redux/cubics/cubicsOperations";
import { getCubicsEndGameResult } from "../../redux/cubics/cubicsSelectors";
import { BalanceContainer, Container } from "../User/Balance";
import { Button } from "../Appbar/AppBar.styled";



const CubicsWinner = () => {
    const dispatch: AppDispatch = useDispatch();
    const endGameResult = useSelector(getCubicsEndGameResult)
    const onClickEndGame = () => {
        dispatch(deleteThrowGame(''));
    }
    return <Container><BalanceContainer>{endGameResult.toUpperCase()}
        <Button type="button" onClick={() => onClickEndGame()}>End Game</Button>
    </BalanceContainer>
    </Container>
}

export default CubicsWinner;