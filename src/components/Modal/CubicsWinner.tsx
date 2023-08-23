import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { deleteThrowGame } from "../../redux/cubics/cubicsOperations";
import { getCubicsEndGameResult } from "../../redux/cubics/cubicsSelectors";



const CubicsWinner = () => {
    const dispatch: AppDispatch = useDispatch();
    const endGameResult = useSelector(getCubicsEndGameResult)
    const onClickEndGame = () => {
        dispatch(deleteThrowGame(''));
    }
    return <div>{endGameResult}
        <button type="button" onClick={() => onClickEndGame()}>End Game</button>
    </div>
}

export default CubicsWinner;